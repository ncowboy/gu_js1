"use strict";

const cart = {
    items: [],
    totalSum: 0,
    settings: {
        totalSum: null,
        catalogSelector: '.catalog-container',
        itemSelector: '.item',
        cartButtonSelector: '.cart-button',
        countFieldSelector: '.item-qty',
        itemNameSelector: '.card-title',
        cartContainerSelector: '.cart',
        cartItemRowClass: 'item-row'
    },

    addHandlers() {
        const cartContainer = document.querySelector(this.settings.catalogSelector);
        cartContainer.addEventListener('click', (event) => {
            if (event.target.tagName === 'BUTTON') {
                const item = event.target.parentElement.parentElement.parentElement.parentElement;
                this.addItem(item);
                this.renderCart();
            }
        });
    },

    addItem(elem) {
        const elemObj = this.prepareItem(elem);
        const index = this.findItemInCart(elemObj);
        !Number.isInteger(index) ? this.items.push(elemObj) : this.items[index].count += elemObj.count;
    },

    prepareItem(elem) {
        const obj = {
            id: +elem.dataset.id,
            name: elem.querySelector(this.settings.itemNameSelector).innerHTML,
            price: +elem.dataset.price,
            count: +elem.querySelector(this.settings.countFieldSelector).value,
        };
        return (obj);
    },

    findItemInCart(item) {
        let res = null;
        this.items.forEach((value, key) => {
            res = value.id === item.id ? key : false;
        });
        return res;
    },

    renderCart() {
        this.clearCart();
        const cart = document.querySelector(this.settings.cartContainerSelector);
        for (const item of this.items) {
            const tableEl = cart.querySelector('.table');
            const tfootEl = cart.querySelector('tfoot');
            const trEl = document.createElement('tr');
            trEl.classList.add(this.settings.cartItemRowClass);

            const thName = document.createElement('th');
            thName.innerHTML = item.name;
            trEl.appendChild(thName);

            const thPrice = document.createElement('th');
            thPrice.innerHTML = `${item.price} р.`;
            trEl.appendChild(thPrice);

            const thQty = document.createElement('th');
            thQty.innerHTML = item.count;
            trEl.appendChild(thQty);

            const thTotal = document.createElement('th');
            thTotal.innerHTML = `${item.price * item.count} р.`;
            trEl.appendChild(thTotal);

            tableEl.insertBefore(trEl, tfootEl);
        }
    },

    clearCart() {
        let items = document.querySelectorAll(`.${this.settings.cartItemRowClass}`);
        items.forEach((item) => {
            item.remove();
        })
    },

    init(userSettings = {}) {
        Object.assign(this.settings, userSettings);
        this.addHandlers();
    },
};

cart.init({});




"use strict";

/**
 * Объект корзины
 * @type {Object}
 * @property {Array} items Массив с товарами
 * @property settings Объект с настройками
 * @property settings.catalogSelector Селектор контейнера для каталога
 * @property settings.itemSelector Селектор для товара
 * @property settings.cartButtonSelector Селектор для кнопки добавления в корзину
 * @property settings.cartClearButtonSelector Селектор для кнопки очистки корзины
 * @property settings.countFieldSelector Селектор для поля ввода количества товара
 * @property settings.itemNameSelector Селектор для названия товара
 * @property settings.cartContainerSelector Селектор контейнера для корзины
 * @property settings.cartItemRowClass Класс для строки товара в корзине
 * @property settings.cartTotalSumSelector Селектор для суммы корзины
 */

const cart = {
  items: [],
  settings: {
    catalogSelector: '.catalog-container',
    itemSelector: '.item',
    cartButtonSelector: '.cart-button',
    cartClearButtonSelector: '.clear-cart',
    countFieldSelector: '.item-qty',
    itemNameSelector: '.card-title',
    cartContainerSelector: '.cart',
    cartItemRowClass: 'item-row',
    cartTotalSumSelector: '.total-sum'
  },

  /**
   * Инициализирует корзину
   * @param userSettings {Object} Пользовательские настройки
   */
  init(userSettings = {}) {
    Object.assign(this.settings, userSettings);
    this.addEventHandler();
    this.clearCartEvenHandler();
  },

  /**
   * Добавляет обработчик события при добавлении в корзину
   */
  addEventHandler() {
    const cartContainer = document.querySelector(this.settings.catalogSelector);
    cartContainer.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') {
        const item = event.target.parentElement.parentElement.parentElement.parentElement;
        this.addItem(item);
        this.renderCart();
      }
    });
  },

  /**
   * Добавляет обработчик события при очистке корзины
   */
  clearCartEvenHandler() {
    const clearButton = document.querySelector(this.settings.cartClearButtonSelector);
    clearButton.addEventListener('click', () => {
      this.items = [];
      this.renderCart();
    });
  },

  /**
   * Добавляет товар в корзину
   * @param {Object} elem DOM объект товара
   */
  addItem(elem) {
    const elemCount = this.getCountValue(elem);
    if (Number.isInteger(elemCount)) {
      const elemObj = {
        id: +elem.dataset.id,
        name: elem.querySelector(this.settings.itemNameSelector).innerHTML,
        price: +elem.dataset.price,
        count: elemCount
      };
      const index = this.findItemInCart(elemObj);
      !Number.isInteger(index) ? this.items.push(elemObj) : this.items[index].count += elemObj.count;
    }
  },

  /**
   * Валидирует ввод количества товара и вовращает его или выводит предупреждение
   * @param item DOM объект товара
   * @return {int}
   */
  getCountValue(item) {
    const value = +item.querySelector(this.settings.countFieldSelector).value;
    if (value < 1 || value > 10) {
      alert('Введите целое число от 1 до 10');
    } else {
      return value;
    }
  },

  /**
   * Проверяет, есть ли уже такой товар в корзине.
   * @param item
   * @return {int|null} Индекс товара в корзине либо null
   */
  findItemInCart(item) {
    let result = null;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === item.id) {
        result = i;
        break;
      }
    }
    return result;
  },

  /**
   * Формирует HTML товаров в корзине и добавялет их в DOM
   */
  renderCart() {
    this.clearCartElement();
    const cart = document.querySelector(this.settings.cartContainerSelector);
    for (const item of this.items) {
      const tableBody = cart.querySelector('tbody');
      const trEl = document.createElement('tr');
      trEl.classList.add(this.settings.cartItemRowClass);

      const thName = document.createElement('td');
      thName.innerHTML = item.name;
      trEl.appendChild(thName);

      const thPrice = document.createElement('td');
      thPrice.innerHTML = `${item.price} р.`;
      trEl.appendChild(thPrice);

      const thQty = document.createElement('td');
      thQty.innerHTML = item.count;
      trEl.appendChild(thQty);

      const thTotal = document.createElement('td');
      thTotal.innerHTML = `${item.price * item.count} р.`;
      trEl.appendChild(thTotal);

      tableBody.appendChild(trEl);
    }
    this.insertCartSum();
  },

  /**
   * Вставляет сумму корзины в DOM
   */
  insertCartSum() {
    const cartSum = document.querySelector(this.settings.cartTotalSumSelector);
    cartSum.innerHTML = this.calculateCartSum().toString();
  },

  /**
   * Считает сумму корзины и возвращает результат
   * @return {number} Результат
   */
  calculateCartSum() {
    let result = 0;
    if (this.items.length > 0) {
      this.items.forEach((item) => {
        result += item.price * item.count;
      });
    }
    return result;
  },

  /**
   * Очищает DOM элемент корзины от товаров
   */
  clearCartElement() {
    let items = document.querySelectorAll(`.${this.settings.cartItemRowClass}`);
    items.forEach((item) => {
      item.remove();
    })
  }
};

cart.init({});




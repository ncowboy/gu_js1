function list(names) {
    let newArr = [];
    for (let i = 0; i < names.length; i++) {
        if (i === names.length - 2) {
            names[i].name += ' & ';
            newArr.push(names[i].name);
        } else if (i === names.length - 1) {
            names[i].name += '';
            newArr.push(names[i].name);
        }
        else {
            names[i].name += ', ';
            newArr.push(names[i].name);
        }
    }
    str = newArr.join('');
    return str;
}


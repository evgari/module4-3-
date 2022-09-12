'use strict';

const product = 'Xiaomi 12 Lite';
const count = 8;
const category = 'smartphones';
const price = 27490;
const totalPrice = price * count;

const userProduct = prompt('Наименование товара');
const userCount = prompt('Количество товара');
const userCategory = prompt('Категория товара');
const userPrice = prompt( 'Цена товара');
const userTotalPrice = userCount * userPrice;

console.log(product);
console.log(totalPrice);

console.log(typeof userProduct);
console.log(typeof +userCount);
console.log(typeof userCategory);
console.log(typeof +userPrice);

console.log(`На складе ${userCount} единицы товара ${userProduct} на сумму ${userTotalPrice} рублей`);
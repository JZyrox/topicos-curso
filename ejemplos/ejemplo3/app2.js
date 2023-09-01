'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavari 23, Firenze Italy',
  categories: ['Italian', 'Mexican', 'Vegetarian', 'Organic'],
  startedMenu: ['Garlic Bread', 'Foccacia', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.startedMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [1, 2, 3, 4];

const a = arr[0]; // 1
const b = arr[1]; // 2
const c = arr[2]; // 3

// Se obtienen los valores del array y se generan las variables
const [var1, var2, var3, var4, var5] = arr;

// Obtener en dos variables la primera y segunda categoría del restaurant
//let [main, secondary] = restaurants.categories;

//const temp = main; // Italian
//main = secondary; // Mexican

//console.log(main, secondary);

//[main, secondary] = [secondary, main];

//console.log(main, secondary);

const [starter, main] = restaurant.order(1, 0);
console.log(starter);
console.log(main);
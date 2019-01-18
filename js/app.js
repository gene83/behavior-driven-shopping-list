'use strict';

const shopping_list = require('../js/shopping-list.js');
const shopping_list_item = require('../js/shopping-list-item.js');
const ShoppingList = shopping_list.ShoppingList;
const ShoppingListItem = shopping_list_item.ShoppingListItem;

const content = document.querySelector('#content');
const addItemButton = document.querySelector('#addShoppingListItemButton');

const list = new ShoppingList();

function addToShoppingList() {
  const title = document.querySelector('#title').value;
  const description = document.querySelector('#description').value;
  const newItem = new ShoppingListItem(title, description);

  list.addItem(newItem);
  content.innerHTML = list.render();
}

addItemButton.addEventListener('click', addToShoppingList);

const listElement = list.render();

content.innerHTML = listElement;

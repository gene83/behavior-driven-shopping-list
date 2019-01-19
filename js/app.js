'use strict';

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

function changeCheckedStatus(idx, checkbox) {
  if (checkbox.checked) {
    list.items[idx].check();
  } else {
    list.items[idx].uncheck();
  }

  content.innerHTML = list.render();
}

function removeItemButtonClicked(idx) {
  const item = list.items[idx];
  list.removeItem(item);

  content.innerHTML = list.render();
}

addItemButton.addEventListener('click', addToShoppingList);
content.innerHTML = list.render();

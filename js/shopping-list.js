'use strict';

const shopping_list_item = require('./shopping-list-item');
const ShoppingListItem = shopping_list_item.ShoppingListItem;

class ShoppingList {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    if (item instanceof ShoppingListItem) {
      this.items.push(item);
    } else {
      throw new Error('addItem only adds shopping list items');
    }
  }
}

module.exports = {
  ShoppingList
};

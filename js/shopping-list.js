'use strict';

class ShoppingList {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    if (item instanceof ShoppingListItem) {
      item.index = this.items.length;
      this.items.push(item);
    } else {
      throw new Error('addItem only adds shopping list items');
    }
  }

  removeItem(item) {
    if (arguments.length === 0) {
      this.items.pop();
      return;
    }

    const index = this.items.indexOf(item);

    if (index !== -1) {
      this.items.splice(index, 1);
    } else {
      throw new Error(
        'could not remove item because it was not found in the list'
      );
    }
  }

  render() {
    const htmlArray = [];
    let i = 0;
    this.items.forEach(item => {
      htmlArray.push(item.render(i));
      i++;
    });

    return `<ul>${htmlArray.join('')}</ul>`;
  }
}

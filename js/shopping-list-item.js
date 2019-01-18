'use strict';

class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.isDone = false;
  }

  check() {
    this.isDone = true;
  }

  uncheck() {
    this.isDone = false;
  }

  render() {
    // const listElement = document.createElement('li');
    // const nameSpan = document.createElement('span');
    // const descriptionSpan = document.createElement('span');
    
    // listElement.className = `completed_${isDone}`;

    // nameSpan.innerHTML = this.name;
    // descriptionSpan.innerHTML = this.description;
    // listElement.appendChild(nameSpan, descriptionSpan);

    // return listElement;

    return `<li class="completed_${this.isDone}"><span>${this.name}</span> <span>${this.description}</span></li>`;
  }
}

module.exports = {
  ShoppingListItem : ShoppingListItem
}

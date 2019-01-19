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

  render(idx) {
    let isChecked = '';
    let strikeStart = '';
    let strikeEnd = '';

    if (this.isDone) {
      isChecked = 'checked';
      strikeStart = '<strike>';
      strikeEnd = '</strike>';
    }

    return `<li class="completed_${this.isDone}">
    <input type="checkbox" onchange="changeCheckedStatus(${idx}, this)" ${isChecked}/>
    ${strikeStart}
    <span>${this.name}</span>
    <span>${this.description}</span>
    ${strikeEnd}
    <button onclick="removeItemButtonClicked(${idx})">x</button>
    </li>`;
  }
}

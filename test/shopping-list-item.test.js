'use strict';

const chai = require('chai');
const shopping_list_item = require('../js/shopping-list-item.js');
const shopping_list = require('../js/shopping-list.js');
const ShoppingListItem = shopping_list_item.ShoppingListItem;
const ShoppingList = shopping_list.ShoppingList;

const expect = chai.expect;
const should = chai.should;

describe('ShoppingListItem', function () {
  it('should be a class', function () {
    expect(ShoppingListItem).to.be.a('function');
    expect(new ShoppingListItem()).to.be.instanceof(ShoppingListItem);
  });

  it("should have property named 'name'", function () {
    const pizza = new ShoppingListItem('pizza', 'pepperoni');

    expect(new ShoppingListItem()).to.have.property('name');
    expect(pizza.name).to.be.a('string');
    expect(pizza.name).to.deep.equal('pizza');
  });

  it("should have property named 'description'", function () {
    const pizza = new ShoppingListItem('pizza', 'pepperoni');

    expect(new ShoppingListItem()).to.have.property('description');
    expect(pizza.description).to.be.a('string');
    expect(pizza.description).to.deep.equal('pepperoni');
  });

  it("should have property 'isDone'", function () {
    const pizza = new ShoppingListItem('pizza', 'pepperoni', 'third');

    expect(pizza).to.have.property('isDone');
    expect(pizza.isDone).to.be.a('boolean');
    expect(pizza.isDone).to.deep.equal(false);
  });

  it('should have a constructor method that accepts 2 arguments, name and description', function () {
    const pizza = new ShoppingListItem('pizza', 'pepperoni', 'third');

    expect(pizza.name).to.deep.equal('pizza');
    expect(pizza.description).to.deep.equal('pepperoni');
    expect(pizza.third).to.be.undefined;
  });

  it("should have a method named 'check'", function () {
    const pizza = new ShoppingListItem('pizza', 'pepperoni');

    expect(pizza.check).to.exist;
    expect(pizza.check).to.be.a('function');

    pizza.check();
    expect(pizza.isDone).to.deep.equal(true);
  });

  it("should have a method named 'uncheck'", function () {
    const pizza = new ShoppingListItem('pizza', 'pepperoni');

    expect(pizza.uncheck).to.exist;
    expect(pizza.uncheck).to.be.a('function');

    pizza.check();
    pizza.uncheck();
    expect(pizza.isDone).to.deep.equal(false);
  });

  it("should have a method named 'render'", function () {
    const pizza = new ShoppingListItem('pizza', 'pepperoni');

    expect(pizza.render).to.exist;
    expect(pizza.render).to.be.a('function');
    expect(pizza.render()).to.deep.equal(
      '<li class="completed_false"><span>pizza</span> <span>pepperoni</span></li>'
    );
  });
});

describe('ShoppingList', function () {
  it('should be a class', function () {
    expect(ShoppingList).to.be.a('function');
    expect(new ShoppingList()).to.be.instanceof(ShoppingList);
  });
  
  it('should have a property named \'items\'', function () {
    expect(new ShoppingList()).to.have.property('items');
    expect(new ShoppingList().items).to.be.an('array');
  });
});

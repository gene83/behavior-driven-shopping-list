'use strict';

const chai = require('chai');
const shoppingJS = require('../js/shopping-list-item.js');
const ShoppingListItem = shoppingJS.ShoppingListItem;

const expect = chai.expect;
const should = chai.should;

console.log(shoppingJS);

describe('ShoppingListItem', function() {
  it('should be a class', function() {
    expect(ShoppingListItem).to.be.a('function');
    expect(new ShoppingListItem()).to.be.instanceof(ShoppingListItem);
  });

  it("should have property named 'name'", function() {
    const pizza = new ShoppingListItem('pizza', 'pepperoni');

    expect(new ShoppingListItem()).to.have.property('name');
    expect(pizza.name).to.be.a('string');
    expect(pizza.name).to.deep.equal('pizza');
  });

  it("should have property named 'description'", function() {
    const pizza = new ShoppingListItem('pizza', 'pepperoni');

    expect(new ShoppingListItem()).to.have.property('description');
    expect(pizza.description).to.be.a('string');
    expect(pizza.description).to.deep.equal('pepperoni');
  });

  it("should have property 'isDone'", function() {
    const pizza = new ShoppingListItem('pizza', 'pepperoni', 'third');

    expect(pizza).to.have.property('isDone');
    expect(pizza.isDone).to.be.a('boolean');
    expect(pizza.isDone).to.deep.equal(false);
  });

  it('should have a constructor method that accepts 2 arguments, name and description', function() {
    const pizza = new ShoppingListItem('pizza', 'pepperoni', 'third');

    expect(pizza.name).to.deep.equal('pizza');
    expect(pizza.description).to.deep.equal('pepperoni');
    expect(pizza.third).to.be.undefined;
  });

  it("should have a method named 'check'", function() {
    const pizza = new ShoppingListItem('pizza', 'pepperoni');

    expect(pizza.check).to.exist;
    expect(pizza.check).to.be.a('function');

    pizza.check();
    expect(pizza.isDone).to.deep.equal(true);
  });

  it("should have a method named 'uncheck'", function() {
    const pizza = new ShoppingListItem('pizza', 'pepperoni');

    expect(pizza.uncheck).to.exist;
    expect(pizza.uncheck).to.be.a('function');

    pizza.check();
    pizza.uncheck();
    expect(pizza.isDone).to.deep.equal(false);
  });
});

const chai = require('chai');

const expect = chai.expect;
const should = chai.should;

describe('ShoppingListItem', function() {
  it('should be a class', function() {
    expect(ShoppingListItem).to.be.a('function');
    expect(new ShoppingListItem()).to.be.instanceof('ShoppingListItem');
  });

  it('should have property named name', function() {
    expect(new ShoppingListItem()).to.have.property('name');
  });

  it('should have property named description', function() {
    expect(new ShoppingListItem()).to.have.property('description');
  });

  it('should have property isDone', function() {
    expect(new ShoppingListItem()).to.have.property('isDone');
  });

  it('should have a constructor method that accepts 2 arguments, name and description', function() {
    expect(new ShoppingListItem('name', 'description').name).to.deep.equal(
      'name'
    );
    expect(
      new ShoppingListItem('name', 'description').description
    ).to.deep.equal('description');
    expect(new ShoppingListItem('name', 'description', 'third').third).to.be
      .undefined;
  });
});

const { expect } = require('chai');
const {singlyLinkedList} = require('../../LinkedLists/singly');

describe('singly-linked list', () => {
  it('Returns true', () => {
    expect(singlyLinkedList()).to.equal(true);
  });
});
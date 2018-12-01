const chai = require("chai");
const expect = chai.expect;
const {validateInput, filterValue} = require('../utils.js');
const {KINGDOMS, QUESTIONS} = require('../constants.js')

describe("validateInput: Validate user input", function() {
  it("should accept inputs is truthy", function() {
    expect(validateInput('air,message')).to.be.true;
  });
  it("should return error message if input is falsy", function() {
    expect(validateInput(false)).to.includes('Enter input in the format');
  });
});

describe("filterValue: should filter input values in realtime.", function() {
  it("should reject if the value doesn't include comma", function() {
    expect(filterValue('air', KINGDOMS)).to.be.false;
  });
  it("should reject if first part of input is not a kingdom", function() {
    expect(filterValue('notAKingdom,message', KINGDOMS)).to.be.false;
  });
  it("should return proper structured object if the input matches the format", function() {
    expect(filterValue('air,message', KINGDOMS)).to.deep.equal({ kingdom: 'air', message: 'message'})
  });
});

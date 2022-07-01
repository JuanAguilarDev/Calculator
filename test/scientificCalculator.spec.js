const { expect } = require("chai");

const scientificCalculator = require("../src/scientificCalculator");

describe("Testing scientific calculator methods", function () {
  it("Testing roundUp with more than a number", function () {
    expect(scientificCalculator.roundUp(9.5)).to.be.equal(10);
    expect(scientificCalculator.roundUp(9.1)).to.be.equal(10);
    expect(scientificCalculator.roundUp(9.666)).to.be.equal(10);
    expect(() => scientificCalculator.roundUp(0)).to.throw("ERROR::Number is less than or equal to zero..!");
    expect(() => scientificCalculator.roundUp(-10)).to.throw("ERROR::Number is less than or equal to zero..!");
  });

  it("Testing roundDown with more than a number", function () {
    expect(scientificCalculator.roundDown(9.5)).to.be.equal(9);
    expect(scientificCalculator.roundDown(9.1)).to.be.equal(9);
    expect(scientificCalculator.roundDown(9.006)).to.be.equal(9);
    expect(() => scientificCalculator.roundDown(0)).to.throw("ERROR::Number is less than or equal to zero..!");
    expect(() => scientificCalculator.roundDown(-10)).to.throw("ERROR::Number is less than or equal to zero..!");
  });

  it("Testing square of a number", function () {
    expect(scientificCalculator.square(4)).to.be.equal(2);
    expect(scientificCalculator.square(15.8)).to.be.equal(3.9749213828703582);
    expect(() => scientificCalculator.square(0)).to.throw("ERROR::Number is less than or equal to zero..!");
    expect(() => scientificCalculator.square(-10)).to.throw("ERROR::Number is less than or equal to zero..!");
  });

  it("Testing calculating the exponent of a number", function () {
    expect(scientificCalculator.potencyOf(5, 0)).to.be.equal(1);
    expect(scientificCalculator.potencyOf(1, 10)).to.be.equal(1);
    expect(scientificCalculator.potencyOf(3, 3)).to.be.equal(27);
    expect(() => scientificCalculator.potencyOf('s', 3)).to.throw("ERROR: an number was expected.");
    
  });
});
const { expect } = require("chai");

const commonCalculator = require("../src/commonCalculator");

describe("Testing common calculator methods", function () {
  it("Testing add operation of two numbers", function () {
    expect(commonCalculator.addNumbers(5, 10)).to.be.equal(15);
    expect(commonCalculator.addNumbers(-5, -10)).to.be.equal(-15);
    expect(commonCalculator.addNumbers(5, -10)).to.be.equal(-5);
    expect(commonCalculator.addNumbers(-5, 10)).to.be.equal(5);
    expect(commonCalculator.addNumbers(4.5, 6.9)).to.be.equal(11.4);
  });

  it("Testing substract operation of two numbers", function () {
    expect(commonCalculator.substractNumbers(5, 10)).to.be.equal(-5);
    expect(commonCalculator.substractNumbers(10, 5)).to.be.equal(5);
    expect(commonCalculator.substractNumbers(5, -10)).to.be.equal(15);
    expect(commonCalculator.substractNumbers(-10, 5)).to.be.equal(-15);
    expect(commonCalculator.substractNumbers(-4.5, 6.9)).to.equal(-11.4);
  });

  it("Testing multiplication operation of two numbers", function () {
    expect(commonCalculator.multiply(5, 10)).to.be.equal(50);
    expect(commonCalculator.multiply(-5, 10)).to.be.eq(-50);
    expect(commonCalculator.multiply(5, -10)).to.be.equal(-50);
    expect(commonCalculator.multiply(-5, -10)).to.be.equal(50);
    expect(commonCalculator.multiply(4.5, 6.9)).to.be.equal(31.05);
  });

  it("Testing division operation of two numbers", function () {
    expect(commonCalculator.divideNumbers(10, 5)).to.be.equal(2);
    expect(commonCalculator.divideNumbers(5, 10)).to.be.equal(0.5);
    expect(commonCalculator.divideNumbers(0, 5)).to.be.equal(0);
    expect(() => commonCalculator.divideNumbers(10, 0)).to.throw("ERROR:: Division by zero..!");
  });

  it("Testing module operation of two numbers", function () {
    expect(commonCalculator.moduleOf(10, 5)).to.be.equal(0);
    expect(commonCalculator.moduleOf(0, 10)).to.be.equal(0);
    expect(() => commonCalculator.moduleOf(10, 0)).to.throw("ERROR:: division by zero..!");
  });
})
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  let counter;

  beforeEach(async function () {
    const Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy();
    await counter.deployed();
  });

  it("adds correctly", async function () {
    await counter.add(10);
    const total = await counter.total;
    expect(total).to.equal(10);
  });

  it("subtracts correctly", async function () {
    await counter.add(20);
    await counter.subtract(5);
    const subtracted = await counter.subtract;
    expect(subtracted).to.equal(15);
  });

  it("multiplies correctly", async function () {
    await counter.add(5);
    await counter.multiply(3);
    const multiplied = await counter.multiply;
    expect(multiplied).to.equal(15);
  });

  it("divides correctly", async function () {
    await counter.add(30);
    await counter.divide(6);
    const divided = await counter.divide;
    expect(divided).to.equal(5);
  });

  it("returns all values correctly", async function () {
    await counter.add(100);
    await counter.subtract(30);
    await counter.multiply(2);
    await counter.divide(10);
    const [total, subtracted, multiplied, divided] = await counter.getValues();
    expect(total).to.equal(140);
    expect(subtracted).to.equal(70);
    expect(multiplied).to.equal(280);
    expect(divided).to.equal(14);
  });
});

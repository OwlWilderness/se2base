import { expect } from "chai";
import { ethers } from "hardhat";
import { ControlStructures } from "../typechain-types";

//import { MaxUint256, getUint } from "ethers";

describe("ControlStructures", function () {
  // We define a fixture to reuse the same setup in every test.

  let controlStructures: ControlStructures;
  before(async () => {
    const factory = await ethers.getContractFactory("ControlStructures");
    controlStructures = (await factory.deploy()) as ControlStructures;
    await controlStructures.waitForDeployment();
  });

  describe("fizzBuzz", async function () {
    /*
    Create a function called fizzBuzz that accepts a uint called _number and returns a string memory. The function should return:

    "Fizz" if the _number is divisible by 3
    "Buzz" if the _number is divisible by 5
    "FizzBuzz" if the _number is divisible by 3 and 5
    "Splat" if none of the above conditions are true
    */
    it("'Fizz' if the _number is divisible by 3", async function () {
      expect(await controlStructures.fizzBuzz(3)).to.equal("Fizz");
    });

    it("'Buzz' if the _number is divisible by 5", async function () {
      expect(await controlStructures.fizzBuzz(5)).to.equal("Buzz");
    });

    it("'FizzBuzz' if the _number is divisible by 3 and 5", async function () {
      expect(await controlStructures.fizzBuzz(15)).to.equal("FizzBuzz");
    });

    it("'Splat' if none of the above conditions are true", async function () {
      expect(await controlStructures.fizzBuzz(4)).to.equal("Splat");
    });
  });
  /*
    Create a function called doNotDisturb that accepts a uint called _time,
     and returns a string memory. It should adhere to the following properties:

    If _time is greater than or equal to 2400, trigger a panic
    If _time is greater than 2200 or less than 800, revert with a custom error of AfterHours, and include the time provided
    If _time is between 1200 and 1259, revert with a string message "At lunch!"
    If _time is between 800 and 1199, return "Morning!"
    If _time is between 1300 and 1799, return "Afternoon!"
    If _time is between 1800 and 2200, return "Evening!"

    //this is a litte weird as the times are 99 and not 59
    */
  describe("doNotDisturb", async function () {
    it("If _time is greater than or equal to 2400, trigger a panic", async function () {
      expect(controlStructures.doNotDisturb(2400)).to.be.revertedWithPanic(0x1);
    });

    it("If _time is greater than 2200 or less than 800, revert with a custom error of AfterHours", async function () {
      expect(controlStructures.doNotDisturb(2201)).to.be.revertedWithCustomError(controlStructures, "AfterHours");
      expect(controlStructures.doNotDisturb(799)).to.be.revertedWithCustomError(controlStructures, "AfterHours");
    });

    it("If _time is between 1200 and 1259, revert with a string message 'At lunch!'", async function () {
      expect(controlStructures.doNotDisturb(1200)).to.be.revertedWith("At lunch!");
      expect(controlStructures.doNotDisturb(1230)).to.be.revertedWith("At lunch!");
      expect(controlStructures.doNotDisturb(1259)).to.be.revertedWith("At lunch!");
    });

    it("If _time is between 800 and 1159, return 'Morning!'", async function () {
      expect(await controlStructures.doNotDisturb(800)).to.equal("Morning!");
      expect(await controlStructures.doNotDisturb(1022)).to.equal("Morning!");
      expect(await controlStructures.doNotDisturb(1159)).to.equal("Morning!");
    });

    it("If _time is between 1300 and 1799, return 'Afternoon!'", async function () {
      expect(await controlStructures.doNotDisturb(1300)).to.equal("Afternoon!");
      expect(await controlStructures.doNotDisturb(1566)).to.equal("Afternoon!");
      expect(await controlStructures.doNotDisturb(1799)).to.equal("Afternoon!");
    });

    it("If _time is between 1800 and 2200, return 'Evening!'", async function () {
      expect(await controlStructures.doNotDisturb(1800)).to.equal("Evening!");
      expect(await controlStructures.doNotDisturb(2050)).to.equal("Evening!");
      expect(await controlStructures.doNotDisturb(2200)).to.equal("Evening!");
    });
  });
});

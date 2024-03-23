import { expect } from "chai";
import { ethers } from "hardhat";
import { BasicMath } from "../typechain-types";
import { MaxUint256, getUint } from "ethers";

describe("BasicMath", function () {
  // We define a fixture to reuse the same setup in every test.

  let basicMath: BasicMath;
  before(async () => {
    const basicMathFactory = await ethers.getContractFactory("BasicMath");
    basicMath = (await basicMathFactory.deploy()) as BasicMath;
    await basicMath.waitForDeployment();
  });

  describe("Overflow", async function () {
    it("It should have a simple adder function 1+1=2; ", async function () {
      expect((await basicMath.adder(1, 1)).sum).to.equal(getUint(2));
      expect((await basicMath.adder(1, 1)).error).to.equal(false);
    });

    it("It should error on overflow MaxUint256 + 1 = 0; ", async function () {
      expect((await basicMath.adder(MaxUint256, 1)).sum).to.equal(getUint(0));
      expect((await basicMath.adder(MaxUint256, 1)).error).to.equal(true);
    });

    it("It should error on overflow 1 + MaxUint256 = 0; ", async function () {
      expect((await basicMath.adder(1, MaxUint256)).sum).to.equal(getUint(0));
      expect((await basicMath.adder(1, MaxUint256)).error).to.equal(true);
    });

    it("It should error on overflow MaxUint256 + MaxUint256 = MaxUint256 - 1; ", async function () {
      expect((await basicMath.adder(MaxUint256, MaxUint256)).sum).to.equal(getUint(MaxUint256) - BigInt(1));
      expect((await basicMath.adder(MaxUint256, MaxUint256)).error).to.equal(true);
    });
  });
  describe("Underflow", async function () {
    it("It should have a simple subtractor function 1-1=0; ", async function () {
      expect((await basicMath.subtractor(1, 1)).difference).to.equal(getUint(0));
      expect((await basicMath.subtractor(1, 1)).error).to.equal(false);
    });

    it("It should error on overflow 1 - 2 = 0; ", async function () {
      expect((await basicMath.subtractor(1, 2)).difference).to.equal(getUint(0));
      expect((await basicMath.subtractor(1, 2)).error).to.equal(true);
    });
  });
});

import { expect } from "chai";
import { ethers } from "hardhat";
import { EmployeeStorage } from "../typechain-types";

const ContractName = "EmployeeStorage";

describe(ContractName, function () {
  // We define a fixture to reuse the same setup in every test.

  let contract: EmployeeStorage;
  before(async () => {
    const factory = await ethers.getContractFactory(ContractName);
    contract = (await factory.deploy(1000, "Pat", 50000, 112358132134)) as EmployeeStorage;
    await contract.waitForDeployment();
  });

  describe("Deployed", async function () {
    it("Name is Pat", async function () {
      expect(await contract.name()).to.equal("Pat");
    });

    it("idNumber is 112358132134", async function () {
      expect(await contract.idNumber()).to.equal(112358132134);
    });
  });

  describe("Views", async function () {
    it("Salary is 50000", async function () {
      expect(await contract.viewSalary()).to.equal(50000);
    });

    it("Shares is 1000", async function () {
      expect(await contract.viewShares()).to.equal(1000);
    });
  });

  describe("GrantShares", async function () {
    it("Greater 5000 new shares added.", async function () {
      expect(contract.grantShares(5001)).to.be.revertedWith("Too many shares");
    });

    it("Total shares greater than 5000.", async function () {
      expect(contract.grantShares(5000)).to.be.revertedWithCustomError(contract, "TooManyShares");
    });

    it("Add 1000 Shares - 2000 total shares.", async function () {
      expect(await contract.grantShares(1000)).to.be.ok;
      expect(await contract.viewShares()).to.equal(2000);
    });
  });
});
/*
    For the purposes of the test, you must deploy the contract with the following values:

    shares - 1000
    name - Pat
    salary - 50000
    idNumber - 112358132134


*/
/*
        Add a public function called grantShares 
        that increases the number of shares allocated to an employee by _newShares. 
        It should:

        Add the provided number of shares to the shares
            If this would result in more than 5000 shares, 
            revert with a custom error called TooManyShares 
            that returns the number of shares the employee would have with the new amount added
    
            If the number of _newShares is greater than 5000, 
            revert with a string message, "Too many shares"
        */

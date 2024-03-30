import { expect } from "chai";
import { ethers } from "hardhat";
import { FavoriteRecords } from "../typechain-types";

//import { MaxUint256, getUint } from "ethers";

describe("FavoriteRecords", function () {
  // We define a fixture to reuse the same setup in every test.

  const albums = [
    "Thriller",
    "Back in Black",
    "The Bodyguard",
    "The Dark Side of the Moon",
    "Their Greatest Hits (1971-1975)",
    "Hotel California",
    "Come On Over",
    "Rumours",
    "Saturday Night Fever",
  ];

  let contract: FavoriteRecords;
  before(async () => {
    const factory = await ethers.getContractFactory("FavoriteRecords");
    contract = (await factory.deploy(albums)) as FavoriteRecords;
    await contract.waitForDeployment();
  });

  describe("approvedRecords", async function () {
    /*
        Loading Approved Albums
        Using the method of your choice, load approvedRecords with the following:

        ['Thriller',
        'Back in Black',
        'The Bodyguard',
        'The Dark Side of the Moon',
        'Their Greatest Hits (1971-1975)',
        'Hotel California',
        'Come On Over',
        'Rumours',
        'Saturday Night Fever']
    */
    it("The Bodygaurd is approved.", async function () {
      expect((await contract.getApprovedRecords())[2]).be.equal("The Bodyguard");
    });

    it("The approved album list len is nine.", async function () {
      expect((await contract.getApprovedRecords()).length).be.equal(9);
    });
  });

  describe("addRecord", async function () {
    it("Reverts on unapproved album.", async function () {
      expect(contract.addRecord("not approved")).to.be.revertedWithCustomError(contract, "NotApproved");
    });

    it("Adds approved album 'The Bodygaurd'.", async function () {
      expect(await contract.addRecord("The Bodyguard")).to.be.ok;
      // expect(await contract.getRecord("The Bodygaurd")).be.equal(true);
    });

    it("Get Record 'The Bodygaurd' to be a favorite.", async function () {
      //expect(await contract.addRecord("The Bodyguard")).to.be.ok;
      expect(await contract.getRecord("0xe615999EF19775E8EE6FEc3dbe9ee4ec224B445a", "The Bodygaurd")).be.equal(true);
    });
  });
});

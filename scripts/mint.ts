import { ethers } from "hardhat";

async function main() {
  const dummyUSDC = await ethers.getContractAt("DummyUSDC", "0x9062713210E10061eF66bD58CE63C7ff19937Ebb");
  const accounts = await ethers.getSigners();
  const account = accounts[0]; // alice
  const amount = 1000;
  const decimals = 18;
  const tx = await dummyUSDC.mint(account.address, ethers.parseUnits(amount.toString(), decimals));
  await tx.wait();
  console.log(account.address, 'owns', await dummyUSDC.balanceOf(account.address), 'tokens');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
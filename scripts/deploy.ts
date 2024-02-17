import { ethers } from "hardhat";

async function main() {
  const name = 'DummyUSDC';
  const symbol = 'DUSDC';

  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const dummyUSDC = await ethers.deployContract("DummyUSDC", [name, symbol]);
  await dummyUSDC.waitForDeployment();

  console.log(
    `DummyUSDC with name ${name} and symbol ${symbol} deployed to ${dummyUSDC.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

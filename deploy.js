const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  
  // Deploy with the deployer as the fee account
  const Exchange = await hre.ethers.getContractFactory("Exchange");
  const exchange = await Exchange.deploy(deployer.address);

  await exchange.waitForDeployment();

  console.log(`Exchange deployed to: ${await exchange.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

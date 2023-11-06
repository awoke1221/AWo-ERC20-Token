const { ethers } = require('hardhat');

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log('Deploying contracts with the account:', deployer.address);

  // Deploy Awoke token contract
  const Awoke = await ethers.getContractFactory('Awoke');
  const awoke = await Awoke.deploy(1000000);

  console.log('Awoke token deployed to:', awoke.address);

  // Deploy DEX contract and pass the address of Awoke token contract as an argument
  const DEX = await ethers.getContractFactory('DEX');
  const dex = await DEX.deploy(awoke.address, 21);

  console.log('DEX deployed to:', dex.address);

  // Perform any additional setup or contract interactions if needed

  // Example: Set the DEX contract address in the Awoke token contract
  // await awoke.setDexContract(dex.address);

  // console.log('DEX contract address set in the Awoke token contract');

  // Example: Mint initial tokens for testing purposes
  // await awoke.mint(deployer.address, ethers.utils.parseEther('1000'));

  //console.log('Initial tokens minted to the deployer address');

  // Perform other contract interactions or setup as required

  console.log('Deployment completed successfully');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
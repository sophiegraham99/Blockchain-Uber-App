const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const {ethers} = require("hardhat");
const contract = require("../artifacts/contracts/BlockTaxi.sol/BlockTaxi.json")

const alchemyProvider = new ethers.providers.AlchemyProvider(network="rinkeby", API_KEY);

const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

const blocktaxiContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer)

async function main () {
    let instance = await blocktaxiContract.deployed()
    instance


    let accounts = await web3.eth.getAccounts()
    instance.sendCoin(accounts[1], 10, {from: accounts[0]})
}

//npx hardhat run scripts/interact.js --network rinkeby
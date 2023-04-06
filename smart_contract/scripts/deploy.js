async function main() {
    const BlockTaxi = await ethers.getContractFactory("BlockTaxi");

    const block_taxi = await BlockTaxi.deploy();
    console.log("Contract deployed succesfully to address: ", block_taxi.address);
}

main()
.then(() => process.exit(0))
.catch(error => {
console.error(error);
process.exit(1);
});

//npx hardhat run scripts/deploy.js --network rinkeby
//deployed to address: 0xd4EA81DdCAdEA2770930681A748fe9a2D5F0015e

const ethers = require('ethers');

const connectToBlockchain = async() => {
    const provider = new ethers.JsonRpcProvider("https://ethereum.publicnode.com/")
    const balance = await provider.getBalance("0xBe1B7039cd33d3DA835BC82ccFE39bE05E5684ea")
    console.log(balance);
    const etherBalance = ethers.formatEther(balance)
    console.log(etherBalance);
    console.log(await provider.getBlockNumber())
}
connectToBlockchain()
const ethers = require('ethers');
const abi = require('./abi.json');
const readSmartContract = async() => {
    const provider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/29b6W9IbhFqdunO5kwC7nUP507eJAlZI")
    const contract = new ethers.Contract("0x2995d93e91c8E73CD690B6645C1Fb2987f0c685E",abi,provider)
    const divData = await contract.getDivision();
    const addData = await contract.getAddition();
    const multiplicationData = await contract.getMultiplication();
    const subtractionData = await contract.getSubtraction();
    const nameFromContract = await contract.name();
    console.log(nameFromContract.toString());
    console.log(divData.toString());
    console.log(addData.toString());
    console.log(multiplicationData.toString());
    console.log(subtractionData.toString());
    

}  
readSmartContract()
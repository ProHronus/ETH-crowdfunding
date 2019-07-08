const compiledFactory = require ('../Ethereum/build/CampaignFactory.json');
//import compiledFactory from ('../Ethereum/build/CampaignFactory.json');

const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('Web3');
require('dotenv').config();



// Create the contract instance

const { abi, evm: { bytecode: { object } } } = compiledFactory;

const provider = new HDWalletProvider(
    process.env.DB_SEED,
    'https://rinkeby.infura.io/v3/8b15c91a2edb4a25af067d0bbfec716d'
);
const web3 = new Web3(provider);


const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    let owner = accounts[0];
    console.log('Attempting to deploy from accounts ', owner);

    const result = await new web3.eth.Contract(abi)
        .deploy({
            data: "0x" + object,
        })
        .send({ from: owner });

    console.log('Contract deployed to: ', result.options.address);
    console.log(abi);
};



deploy();// JavaScript source code

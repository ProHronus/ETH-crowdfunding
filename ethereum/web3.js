const Web3 = require('web3');
import {messageStrings} from './messagestrings';

//import React from 'react';


let web3;
const desiredNetwork = '4';
let initCount = 0;
let errorType;

async function web3Init() {
    if (typeof window === 'undefined' || typeof window.ethereum === 'undefined') {
        const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/8b15c91a2edb4a25af067d0bbfec716d');
        web3 = new Web3(provider);
        errorType = messageStrings.NOMETAMASK;
        
        return web3;
    } else {
        try {
            await ethereum.enable();
        } catch (error) {
            console.log(error.message);
            if (error.message.includes('User denied')) {
                errorType = messageStrings.AUTHDENIED;

            }
        }
        web3 = new Web3(window['ethereum']);
        if (ethereum.networkVersion !== desiredNetwork) {
            errorType = messageStrings.WRONGNETWORK;
        }
        return web3;
    }
}

function isError(){
    return errorType;
}

module.exports = {
    web3Init: web3Init,
    isError: isError
};




import React from 'react';
import web3JS from './web3';

let web3;

export async function checkNetwork() {
    try {
        web3 = await web3JS.web3Init();
    } catch (error) {
        console.log('Error from sc', error.message);
    }
        await this.setState({ errorMessage: web3.isError() });
}
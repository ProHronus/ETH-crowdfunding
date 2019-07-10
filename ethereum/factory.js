import web3JS from './web3';
import FactoryJSON from './build/CampaignFactory.json'


const address = '0x827077c1EFE0eE037c2bE38f2Fe354824a3B43d7';

async function factoryInit() {

        const web3Inst = await web3JS.web3Init();
        const factory = new web3Inst.eth.Contract(FactoryJSON.abi, address);
        return factory;
}

module.exports = {
    factoryInit: factoryInit
}




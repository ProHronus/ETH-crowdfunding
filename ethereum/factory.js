import web3JS from './web3';
import FactoryJSON from './build/CampaignFactory.json'


const address = '0xfda42b3E2cb59BC5737d60B302Da26e1e0E76EbC';

async function factoryInit() {

        const web3Inst = await web3JS.web3Init();
        const factory = new web3Inst.eth.Contract(FactoryJSON.abi, address);
        return factory;
}

module.exports = {
    factoryInit: factoryInit
}




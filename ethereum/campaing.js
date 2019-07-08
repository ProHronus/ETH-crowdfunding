import web3JS from './web3';
import CampaignJSON from './build/Campaign.json'


async function campaignInit(address) {

        const web3Inst = await web3JS.web3Init();
        const campaign = new web3Inst.eth.Contract(CampaignJSON.abi, address);
        return campaign;
}

module.exports = {
    campaignInit: campaignInit
}




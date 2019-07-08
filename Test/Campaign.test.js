const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);
const fs = require('fs-extra');
const path = require('path');


//const compiledFactory = require('../Ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../Ethereum/build/Campaign.json');

const buildPath = path.resolve(path.dirname(), '..', 'ethereum', 'build');


let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    // Create the contract instance
    //const { abi, evm: { bytecode: { object } } } = compiledFactory;
    const { abi, evm: { bytecode: { object } } } =
        JSON.parse(fs.readFileSync(path.resolve(buildPath, 'CampaignFactory.json')));

    //Use one of those accounts to deploy
    // the contract
    factory = await new web3.eth.Contract(compiledCampaign.abi)
        .deploy({
            data: object
        })
        .send({
            from: accounts[0],
            gas: '2000000'
        });

    factory.setProvider(provider);

    await factory.methods.createCampaign('1000').send({ from: accounts[0], gas: '1000000' });

    [campaignAddress] = await factory.methods.getDeployedCampaigns().call();

    campaign = await new web3.eth.Contract(compiledCampaign.abi, campaignAddress);
});

describe('Campaigns', () => {
    it('Deploys factory and campaign', () => {
        assert.ok(factory.options.address, 'factory not deployed');
        assert.ok(campaign.options.address, 'campaign not deployed');
    });

    it('Marks caller as a campaign manager', async () => {
        const manager = await campaign.methods.owner().call();
        assert.equal(accounts[0], manager);
    });

    it('allows to contibute money and marks as approvers', async () => {
        await campaign.methods.contribute().send({
            value: '1001',
            from: accounts[1]
        });
        const isContributor = await campaign.methods.approvers(accounts[1]).call();
        assert(isContributor);

    });

    it('requeres minimum contribution', async () => {
        let sendValue = 1000;
        console.log('Sending value: ', sendValue);
        console.log('Minimum contribution more than: ',
            await campaign.methods.minContribution().call());
        let errThrown;
        try {
            await campaign.methods.contribute().send({
                value: sendValue,
                from: accounts[1]
            });
        } catch (err) {
            console.log(err.message);
            errThrown = err;
        }
        assert(errThrown);
    });

    it('allows a manager to make a payment request', async () => {
        await campaign.methods
            .createRequest('buy batteries', '100', accounts[1])
            .send({
                from: accounts[0],
                gas: '1000000'
            });
        const request = await campaign.methods.requests(0).call();
        assert.equal('buy batteries', request.desciption);
    });

    it('Full path. Allows to contribute, approved and recieve 5 ether', async () => {

        await campaign.methods.contribute().send({
            value: web3.utils.toWei('10', 'ether'),
            from: accounts[1]
        });

        await campaign.methods
            .createRequest('buy batteries', web3.utils.toWei('5', 'ether'), accounts[3])
            .send({
                from: accounts[0],
                gas: '1000000'
            });
        
        await campaign.methods.approveRequest(0).send({
            from: accounts[1],
            gas: '1000000'
        });

        let balance = await web3.eth.getBalance(accounts[3]);
        balance = web3.utils.fromWei(balance, 'ether');
        console.log('Balance before: ', balance)

        await campaign.methods.finalizeRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        });

        balance = await web3.eth.getBalance(accounts[3]);
        balance = web3.utils.fromWei(balance, 'ether');
        balance = parseFloat(balance);
        console.log('balance after: ', balance);
        assert(balance === 105);
    });


    it('Not allows to approve requests who NOT contribute', async () => {
        let errThrown;

        await campaign.methods.contribute().send({
            value: '1001',
            from: accounts[1]
        });

        await campaign.methods
            .createRequest('buy batteries', '100', accounts[1])
            .send({
                from: accounts[0],
                gas: '1000000'
            });
        try {
            await campaign.methods.approveRequest(0).send({
                from: accounts[2],
                gas: '1000000'
            });
        } catch (err) {
            console.log(err.message);
            errThrown = err;
        }
        assert(errThrown);
    });

    it('Not allows double vote for request', async () => {
        let errThrown;

        await campaign.methods.contribute().send({
            value: '1001',
            from: accounts[1]
        });

        await campaign.methods
            .createRequest('buy batteries', '100', accounts[1])
            .send({
                from: accounts[0],
                gas: '1000000'
            });

        await campaign.methods.approveRequest(0).send({
            from: accounts[1],
            gas: '1000000'
        });

        try {
            await campaign.methods.approveRequest(0).send({
                from: accounts[1],
                gas: '1000000'
            });
        } catch (err) {
            console.log(err.message);
            errThrown = err;
        }
        assert(errThrown);
    });
})
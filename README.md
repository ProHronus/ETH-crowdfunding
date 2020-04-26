<h1 align="left">The app for managing crowdfunding campaigns via the Ethereum blockchain.</h1>

## Description

Create and managing smart-contract for crowdfunding campaigns on Ethereum Blockchain through a simple web interface. Smart-contract hold all funds that bakers send to support a particular Campaign.  Backers can control each transaction by approving each payment request.

The transparency and full control under fund spending create secure financial framework without any intermediate party.


👉 **Try it on [Heroku](https://eth-kickstater.herokuapp.com/)** 👈


** Base structure: **
- Deploying Solidity contract to the Etherum blockchain
- Managing smart contract thought web interface
- Using MetaMask for interaction with user wallet
- Infura for fetching data from the Ethereum blockchain
- React.JS and Next.JS as frontend frameworks


** Smart-contract terms: **
- A user who creates the Campaign becomes the Manager
- Multiple backers can contribute to the Campaign by clicking View Campaign
- Campaign page shows related funding Requests
- Backers can approve or disapprove each Manager's request
- When a request gets 50% or more approvals, Manager can finalize a request  and send funds to a recipient


## How To Use
** Before start **
- Run `npm install`
- Install Metamask 

** Running with a deployed smart contract on Rinkeby test network:**
1. Run `node server` 
2. Go to http://localhost:3000/

** Deploying a new smart contract **
1. Create an account on https://infura.io/signup
2. Copy the Rinkeby test network URL
3. Open /ethereum/deploy.js and replace `const rinkebyURL` with yours 
4. Create .env file inside the ethereum folder and add 12 mnemonic words to `DB_SEED` variable  
5. Run `node server` and go to http://localhost:3000/ (stop the server if it's already running)



var argv = require('minimist')(process.argv.slice(2));
const path = require('path');
const fs = require('fs-extra');
const mkdirp = require('mkdirp');
const solc = require('solc');
const assert = require('assert');

const contractName = 'Campaign';
const contractPath = path.resolve(__dirname, 'Contracts', `${contractName}.sol`);
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);


const source = fs.readFileSync(contractPath, 'utf-8');

var input = {
    language: 'Solidity',
    sources: {
        'Campaign.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
}

mkdirp.sync(buildPath);
const output = JSON.parse(solc.compile(JSON.stringify(input)));
fs.writeFileSync(path.resolve(buildPath, `common.json`), JSON.stringify(output, null, 2));

for (var contract  in output.contracts[`${contractName}.sol`]) {

    fs.writeFileSync(path.resolve(buildPath, `${contract}.json`), JSON.stringify(output.contracts[`${contractName}.sol`][contract], null, 2), 'utf-8');
    fs.writeFileSync(path.resolve(buildPath, `${contract}.abi`), JSON.stringify(output.contracts[`${contractName}.sol`][contract].abi, null, 2), 'utf-8');
    fs.writeFileSync(path.resolve(buildPath, `${contract}.bin`), output.contracts[`${contractName}.sol`][contract].evm.bytecode.object, 'utf-8');

}
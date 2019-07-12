const INFURA_API_KEY = 'INPUT_YOUR_INFURA_API_KEY';
const MNEMONIC = 'INPUT_YOUR_MNEMONIC_WORDS';
//const PRIVATE_KEY = 'INPUT_YOUR_PRIVATE_KEY';
const externalConfig = require('./truffle-config');

externalConfig.networks.ropsten = {
  url: `https://ropsten.infura.io/v3/${INFURA_API_KEY}`
};

module.exports = {
  ...externalConfig,
  from: {
    mnemonic: MNEMONIC,
    index: 0
  }
  //from: PRIVATE_KEY
};

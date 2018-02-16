const testnet = 'https://ropsten.infura.io/';
const walletAddress = '<address>';

const web3 = new Web3(new Web3.providers.HttpProvider(testnet));
var balance = web3.eth.getBalance(walletAddress); 
balance = web3.toDecimal(balance);

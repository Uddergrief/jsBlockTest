const Blockchain = require('../src/blockchain.js');

function mine(blockChain){
  console.log('=> Mining Blockchain....');

  const latestBlock = blockChain.getLatestBlock();
  const prevBlockHash = latestBlock.hash;
  const currentBlockData = {
    transactions: blockChain.pendingTransactions,
    index: latestBlock.index+1
  }
  const nonce = blockChain.proofOfWork(prevBlockHash, currentBlockData);
  const blockHash = blockChain.hashBlock(prevBlockHash, currentBlockData, nonce);

  //mining reward
  blockChain.makeNewTransaction(1,'00000', miningNode);
  console.log(`=> Create new Block:\n${blockChain.createNewBlock(nonce, prevBlockHash, blockHash)}`);
}

const cancoin = new Blockchain();
console.log(`=> Create new Blockchain\n${cancoin}`);

cancoin.makeNewTransaction(10, 'P1', 'P2');

mine(cancoin);

cancoin.makeNewTransaction(2200, 'P2', 'P1');
cancoin.makeNewTransaction(3835, 'P1', 'P2');
cancoin.makeNewTransaction(397, 'P1', 'P2');

mine(cancoin);

console.log(`=> Current Blockchain Data: \n${cancoin}`);

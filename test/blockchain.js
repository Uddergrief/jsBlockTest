class Block {
  constructor(index, timestamp, nonce, prevBlockHash, hash, transactions){
    this.index = index; // block number of chain
    this.timestamp = timestamp; // when block created
    this.transactions = transactions; // transaction stored in block
    this.nonce = nonce; // added to block, makes hash output of block change
    this.hash = hash; // compressed block info string
    this.prevBlockHash = prevBlockHash // hash data from previous block
  }
}

class Blockchain {
  constructor() {
    this.chain = []; //where all blocks mined will be stored as chain``
    this.pendingTransactions = []; // where new transactions are held before being placed in new block

    this.createNewBlock(100, '0', 'Genesis block') //Genesis Block. First block in the chain
  }

}

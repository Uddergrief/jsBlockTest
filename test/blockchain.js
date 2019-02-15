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

  //create new block takes 3 params
  createNewBlock(nonce, prevBlockHash, hash){
    //creates new block object
    const newBlock = new Block(
      this.chain.length + 1,
      Date.now(),
      nonce,
      prevBlockHash,
      hash,
      this.pendingTransactions
    );
    
    this.pendingTransactions = []; //sets to empty array. all pendingTransactions put in block
    this.chain.push(newBlock); //pushes new block to chain

    return newBlock; //returns the new block
  }

}

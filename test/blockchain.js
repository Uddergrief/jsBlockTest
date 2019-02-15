const sha256 = require('sha256');

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

  getLastBlock() {
    return this.chain[this.chain.length-1]; //returns last block of chain
  }

  makeNewTransaction(amount, sender, recipient){
    //create transaction object from input params
    const transaction = {
      amount: amount, //how much is being sent to location
      sender: sender, //sender's address
      recipient: recipient //recipient's address
    }
    this.pendingTransactions.push(transaction); //pushes transaction to pendingTransactions when new transaction created

    console.log(`>>> Transaction: ${amount} from ${sender} to ${recipient}`); //logs transaction

    return this.getLatestBlock().index+1; //return number of block transaction will be added to.
  }

  hashBlock(prevBlockHash, currentBlock, nonce){
    //data gets previous block's hash, adds currentBlock, and nonce value;
    const data = prevBlockHash + JSON.stringify(currentBlock) + nonce;
    const hash = sha256(data); //hashes data
    return hash;
  }
}

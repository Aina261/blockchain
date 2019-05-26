import Block from "./block/block";
import Blockchain from "./blockchain/blockchain";
import Transaction from "./transaction/transaction";

const block = new Block();
const blockchain = new Blockchain(block);

const transaction = new Transaction('me', 'you', 7);

const newBlock = blockchain.getNextBlock([transaction]);
blockchain.addBlock(newBlock);

console.log(blockchain);
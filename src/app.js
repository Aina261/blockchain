"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var block_1 = __importDefault(require("./block/block"));
var blockchain_1 = __importDefault(require("./blockchain/blockchain"));
var transaction_1 = __importDefault(require("./transaction/transaction"));
var block = new block_1.default();
var blockchain = new blockchain_1.default(block);
var transaction = new transaction_1.default('me', 'you', 7);
var newBlock = blockchain.getNextBlock([transaction]);
blockchain.addBlock(newBlock);
console.log(blockchain);

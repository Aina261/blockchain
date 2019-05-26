import Block from "./block/block";
import Blockchain from "./blockchain/blockchain";
import Transaction from "./transaction/transaction";

import express from "express";
import * as bodyParser from 'body-parser';
import {TransactionInterface} from "./transaction/transaction.interface";

const app = express();
app.use(bodyParser.json());

const initialBlock = new Block();
let blockchain = new Blockchain(initialBlock);
let transactions: TransactionInterface[] = [];

app.get('/', (req, res) => {
    res.send({"msg": "hello"});
});

app.post('/transaction', (req, res) => {
    let {from, to, amount} = req.body;
    // create a transaction
    let requestTransaction = new Transaction(from, to, amount);
    transactions = [...transactions, requestTransaction];
    const newBlock = new Block();
    newBlock.addTransaction(requestTransaction);
    res.send(requestTransaction);
});

app.get('/blocks', (req, res) => {
    res.send(blockchain.blocks);
});

app.listen(4000, () => {
   console.log('listen 4000 port');
});
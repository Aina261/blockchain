import Block from "./block/block";
import Blockchain from "./blockchain/blockchain";
import Transaction from "./transaction/transaction";

import express from "express";
import * as bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send({"msg": "hello"});
});

app.listen(4000, () => {
   console.log('listen 4000 port');
});
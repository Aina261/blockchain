import {BlockchainInterface} from "./blockchain.interface";
import {BlockInterface} from "../block/block.interface";
import {TransactionInterface} from "../transaction/transaction.interface";
import Block from "../block/block";
import crypto from "crypto";

export default class Blockchain implements BlockchainInterface {
    public blocks: BlockInterface[];
    public difficulty: number;

    constructor(
       genesisBlock: BlockInterface
    ) {
        this.blocks = [];
        this.difficulty = 4;
        this.addBlock(genesisBlock);
    }

    public addBlock(block: BlockInterface): void {
        if (this.blocks.length === 0) {
            block.previousHash = "000000000";
            block.hash = this.generateHash(block);
        }
        this.blocks = [...this.blocks, block];
    }

    public getNextBlock(transactions: TransactionInterface[]): BlockInterface {
        const block = new Block();

        transactions.map((transaction: TransactionInterface) => {
            block.addTransaction(transaction);
        });

        const previousBlock = this.getPreviousBlock();
        block.index = this.blocks.length;
        block.previousHash = previousBlock.hash;
        block.hash = this.generateHash(block);

        return block;
    }

    public getPreviousBlock(): BlockInterface {
        return this.blocks[this.blocks.length -1];
    }

    public generateHash(block: BlockInterface): string {
        let hash = crypto.createHmac('sha512', block.key).digest('hex');
        while (!hash.startsWith(Array(this.difficulty + 1).join('0'))) {
            block.nonce += 1;
            hash = crypto.createHmac('sha512', block.key).digest('hex');
        }
        console.log(hash);
        return hash;
    }
}
import {BlockchainInterface} from "./blockchain.interface";
import {BlockInterface} from "../block/block.interface";
import {TransactionInterface} from "../transaction/transaction.interface";
import sha256 from "js-sha256";
import Block from "../block/block";

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
        let hash = sha256(block.key);
        while (!hash.startsWith(Array(this.difficulty + 1).join('0'))) {
            block.nonce += 1;
            hash = sha256(block.key);
            console.log(hash);

        }
        return hash;
    }
}
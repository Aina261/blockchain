import {BlockchainInterface} from "./blockchain.interface";
import {BlockInterface} from "../block/block.interface";
import {TransactionInterface} from "../transaction/transaction.interface";

export default class Blockchain implements BlockchainInterface {
    public blocks: BlockInterface[];
    public genesisBlock: BlockInterface;

    constructor(
       genesisBlock: BlockInterface
    ) {
        this.blocks = [];
        this.addBlock(genesisBlock);
    }

    public addBlock(block: BlockInterface): void {
        if (this.blocks.length === 0) {
            block.previousHash = "000000000";
            block.hash = this.generateHash(block);
        }
        this.blocks = [...this.blocks, block];
    }

    public generateHash(block: BlockInterface): string {
        return '';
    }

    public getNextBlock(transactions: TransactionInterface[]): BlockInterface {
        return;
    }
}
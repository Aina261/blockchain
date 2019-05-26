import {BlockInterface} from "../block/block.interface";
import {TransactionInterface} from "../transaction/transaction.interface";

export interface BlockchainInterface {
    blocks: BlockInterface[];
    genesisBlock: BlockInterface;
    addBlock(block: BlockInterface): void;
    getNextBlock(transactions: TransactionInterface[]): BlockInterface;
    generateHash(block: BlockInterface): string;
}
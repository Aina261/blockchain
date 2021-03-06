import {BlockInterface} from "../block/block.interface";
import {TransactionInterface} from "../transaction/transaction.interface";

export interface BlockchainInterface {
    blocks: BlockInterface[];
    difficulty: number;
    addBlock(block: BlockInterface): void;
    getNextBlock(transactions: TransactionInterface[]): BlockInterface;
    getPreviousBlock(): BlockInterface;
    generateHash(block: BlockInterface): string;
}
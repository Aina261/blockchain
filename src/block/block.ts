import {BlockInterface} from "./block.interface";
import {TransactionInterface} from "../transaction/transaction.interface";

export default class Block implements BlockInterface {
    constructor (
        public index: number = 0,
        public hash: string = '',
        public previousHash: string = '',
        public nonce: number = 0,
        public transaction: TransactionInterface[] = []
    ) {}

    get key(): string {
        return JSON.stringify(this.transaction) + this.index + this.previousHash + this.nonce;
    }

    public addTransaction(transaction: TransactionInterface): void {
        this.transaction = [...this.transaction, transaction];
    }
}

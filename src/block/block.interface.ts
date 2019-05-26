import {TransactionInterface} from "../transaction/transaction.interface";

export interface BlockInterface {
    index: number;
    hash: string;
    previousHash: string;
    nonce: number;
    transaction: TransactionInterface[];
    key: string;
    addTransaction(transaction: TransactionInterface):void ;
}
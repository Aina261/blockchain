import {TransactionInterface} from "./transaction.interface";

export default class Transaction implements TransactionInterface {
    constructor(
       public from: string,
       public to:string,
       public amount: number
    ) {}
}
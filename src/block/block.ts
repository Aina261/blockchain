import {BlockInterface} from "./block.interface";

export default class Block implements BlockInterface {
    constructor (
        public index: number = 0,
        public hash: string = '',
        public previousHash: string = '',
        public nonce: number = 0,
        public transaction: any[] = []
    ) {}

    get key(): string {
        return JSON.stringify(this.transaction) + this.index + this.previousHash + this.nonce;
    }
}

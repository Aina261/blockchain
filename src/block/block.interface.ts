export interface BlockInterface {
    index: number;
    hash: string;
    previousHash: string;
    nonce: number;
    transaction: any[];
    key: string;
}
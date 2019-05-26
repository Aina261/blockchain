interface Block {
    index: number;
    hash: string;
    previousHash: string;
    nonce: number;
    transaction: any[];
    key: string;
}
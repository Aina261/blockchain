"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Block = /** @class */ (function () {
    function Block(index, hash, previousHash, nonce, transaction) {
        if (index === void 0) { index = 0; }
        if (hash === void 0) { hash = ''; }
        if (previousHash === void 0) { previousHash = ''; }
        if (nonce === void 0) { nonce = 0; }
        if (transaction === void 0) { transaction = []; }
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.nonce = nonce;
        this.transaction = transaction;
    }
    Object.defineProperty(Block.prototype, "key", {
        get: function () {
            return JSON.stringify(this.transaction) + this.index + this.previousHash + this.nonce;
        },
        enumerable: true,
        configurable: true
    });
    Block.prototype.addTransaction = function (transaction) {
        this.transaction = this.transaction.concat([transaction]);
    };
    return Block;
}());
exports.default = Block;

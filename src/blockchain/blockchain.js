"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var js_sha256_1 = __importDefault(require("js-sha256"));
var block_1 = __importDefault(require("../block/block"));
var Blockchain = /** @class */ (function () {
    function Blockchain(genesisBlock) {
        this.blocks = [];
        this.difficulty = 4;
        this.addBlock(genesisBlock);
    }
    Blockchain.prototype.addBlock = function (block) {
        if (this.blocks.length === 0) {
            block.previousHash = "000000000";
            block.hash = this.generateHash(block);
        }
        this.blocks = this.blocks.concat([block]);
    };
    Blockchain.prototype.getNextBlock = function (transactions) {
        var block = new block_1.default();
        transactions.map(function (transaction) {
            block.addTransaction(transaction);
        });
        var previousBlock = this.getPreviousBlock();
        block.index = this.blocks.length;
        block.previousHash = previousBlock.hash;
        block.hash = this.generateHash(block);
        return block;
    };
    Blockchain.prototype.getPreviousBlock = function () {
        return this.blocks[this.blocks.length - 1];
    };
    Blockchain.prototype.generateHash = function (block) {
        var hash = js_sha256_1.default(block.key);
        while (!hash.startsWith(Array(this.difficulty + 1).join('0'))) {
            block.nonce += 1;
            hash = js_sha256_1.default(block.key);
            console.log(hash);
        }
        return hash;
    };
    return Blockchain;
}());
exports.default = Blockchain;

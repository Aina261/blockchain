"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Transaction = /** @class */ (function () {
    function Transaction(from, to, amount) {
        this.from = from;
        this.to = to;
        this.amount = amount;
    }
    return Transaction;
}());
exports.default = Transaction;

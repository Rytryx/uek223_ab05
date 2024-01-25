"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber) {
        this.accountNumber = accountNumber;
        // Implementieren Sie hier die Logik, um Kontostand und Pincode aus der Datenbank zu laden
        this.balance = 3500; // Ersetzen Sie dies durch das tatsächliche Abfrageergebnis
        this.pinCode = '123'; // Ersetzen Sie dies durch das tatsächliche Abfrageergebnis
    }
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    BankAccount.prototype.getAccountNumber = function () {
        return this.accountNumber;
    };
    BankAccount.prototype.isValidTransaction = function (amount) {
        return (amount > 0 && this.balance >= amount);
    };
    BankAccount.prototype.updateBalance = function (amount) {
        this.balance += amount;
        // Implementieren Sie hier die Logik, um den Kontostand in der Datenbank zu aktualisieren
    };
    return BankAccount;
}());
exports.BankAccount = BankAccount;

export class BankAccount {
    public accountNumber: string;
    public balance: number;
    public pinCode: string;

    constructor(accountNumber: string) {
        this.accountNumber = accountNumber;
        this.balance = 3500;
        this.pinCode = '123';
    }

    public getBalance(): number {
        return this.balance;
    }

    public getAccountNumber(): string {
        return this.accountNumber;
    }

    public isValidTransaction(amount: number): boolean {
        return (amount > 0 && this.balance >= amount);
    }

    public updateBalance(amount: number): void {
        this.balance += amount;
    }
}

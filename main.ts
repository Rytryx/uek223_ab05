import * as readline from 'readline';
import { BankAccount } from './BankAccount';
import { Database } from './Database';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const database = new Database();

const account = new BankAccount('12345678');

rl.question('Bitte geben Sie Ihren PIN ein: ', (pin) => {
    if (pin !== account.pinCode) {
        console.log('Falscher PIN.');
        rl.close();
        return;
    }

    rl.question('Bitte geben Sie den Betrag ein, den Sie abheben möchten: ', async (amount) => {
        const withdrawAmount = parseFloat(amount);
    
        if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
            console.log('Ungültiger Betrag.');
            rl.close();
        } else if (!account.isValidTransaction(withdrawAmount)) {
            console.log('Unzureichende Mittel.');
            rl.close();
        } else {
            try {
                const queries = [
                    `UPDATE accounts SET balance = balance - ${withdrawAmount} WHERE accountNumber = '${account.getAccountNumber()}'`
                ];
                await database.performTransaction(queries);
                account.updateBalance(-withdrawAmount);
                console.log(`${withdrawAmount} wurde abgehoben.`);
                rl.close();
            } catch (error) {
                console.error('Ein Fehler ist aufgetreten:', error);
                rl.close();
            }
        }
    });
});

import { Database } from './Database';

async function setupDatabase() {
    const database = new Database();

    const createDatabaseSQL = `CREATE DATABASE IF NOT EXISTS transaktionsuebung;`;
    const useDatabaseSQL = `USE transaktionsuebung;`;
    const createTableSQL = `
        CREATE TABLE IF NOT EXISTS accounts (
            accountNumber VARCHAR(20) PRIMARY KEY,
            balance DECIMAL(10, 2),
            pinCode VARCHAR(20)
        );
    `;
    const insertSampleAccountSQL = `
        INSERT INTO accounts (accountNumber, balance, pinCode) VALUES ('12345678', 1000.00, '1234');
    `;

    try {
        await database.performTransaction([createDatabaseSQL, useDatabaseSQL, createTableSQL, insertSampleAccountSQL]);
        console.log('Datenbank und Tabelle wurden erfolgreich erstellt.');
    } catch (error) {
        console.error('Fehler bei der Einrichtung der Datenbank:', error);
    }
}

setupDatabase();

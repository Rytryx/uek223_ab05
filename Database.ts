import { createPool, Pool } from 'mariadb';

export class Database {
    private pool: Pool;

    constructor() {
        this.pool = createPool({
            host: 'localhost', 
            port: 3308,
            user: 'lars',
            password: 'CsBe123', 
            database: 'transaktionsuebung'
        });
    }

    async performTransaction(queries: string[]): Promise<void> {
        let connection;
        try {
            connection = await this.pool.getConnection();
            await connection.beginTransaction();

            for (const query of queries) {
                await connection.query(query);
            }

            await connection.commit();
        } catch (error) {
            if (connection) {
                await connection.rollback();
            }
            throw error;
        } finally {
            if (connection) {
                connection.release();
            }
        }
    }
}

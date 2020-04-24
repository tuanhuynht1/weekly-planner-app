const { Pool } = require('pg');

class Database {
    constructor(connectionString) {
        this.pool = new Pool({
            connectionString: connectionString
        })
    }

    async test(){
        const res = await this.pool.query('SELECT 420;');
        return res.rows;
    }

}

module.exports = Database;
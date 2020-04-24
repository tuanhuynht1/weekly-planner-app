const { Pool } = require('pg');

class Database {
    constructor(connectionString) {
        this.pool = new Pool({
            connectionString: connectionString
        })
    }

    async test(){
        return await this.pool.query('SELECT 420;');
    }

}

module.exports = Database;
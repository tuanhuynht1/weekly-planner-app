const { Pool } = require('pg');

class Database {
    constructor(connectionString) {
        this.pool = new Pool({
            connectionString: connectionString
        })
    }

    async addNewTodo(description){
        try{
            const res = await this.pool.query(
                `INSERT INTO todos (description) VALUES ('${description}') RETURNING *`
            );
            return res.rows[0]; // return the row just inserted as JSON
        } catch(err){
            console.log(err);
            return err.name; // will return 'error'
        }
    }

    async getAllTodos(){
        const res = await this.pool.query(
            `INSERT INTO todos (description) VALUES ('${description}')`
        );
        return res;
    }
    

}

module.exports = Database;
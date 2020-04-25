const { Pool } = require('pg');

class Database {
    constructor(connectionString) {
        this.pool = new Pool({
            connectionString: connectionString
        })
    }

    async addNewTodo(description,assigned_date){
        try{
            const res = await this.pool.query(
                `INSERT INTO todos (description,assigned_date) 
                VALUES ('${description}','${assigned_date}') RETURNING *`
            );
            return res.rows[0]; // return the row just inserted as JSON
        } catch(err){
            console.log(err);
            return err.name; // will return 'error'
        }
    }

    async getAllTodos(){
        try{
            const res = await this.pool.query(
                `SELECT * FROM todos ORDER BY tid;`
            );
            return res.rows; // return the row just inserted as JSON
        } catch(err){
            console.log(err);
            return err.name; // will return 'error'
        }
    }

    async getTodos(date){
        try{
            const res = await this.pool.query(
                `SELECT * FROM todos
                WHERE assigned_date = '${date}';`
            );
            return res.rows; // return the row just inserted as JSON
        } catch(err){
            console.log(err);
            return err.name; // will return 'error'
        }
    }
    
    async toggleTodoStatus(tid){
        try{
            const res = await this.pool.query(
                `UPDATE todos
                SET completed = NOT completed
                WHERE tid = ${tid}
                RETURNING *;`
            );
            return res.rows[0]; // return the row just updated as JSON
        } catch(err){
            console.log(err);
            return err.name; // will return 'error'
        }
    }

}

module.exports = Database;
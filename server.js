const express = require('express');
const path = require('path');
const Database = require('./database');
const app = express();
const pg = new Database('postgresql://postgres:TT__tt7674@localhost:5432/planner');
// const pg = new Database(process.env.DATABASE_URL); // production build

/* middleware 
--------------------------------------------------------------------------------------*/
// production build
app.use(express.static(path.join(__dirname,'/client/build')));
app.use(express.json());

// GET all todos 
app.get('/todos', async (req,res) =>{
    const results = await pg.getAllTodos();
    console.log(results);
    if(results !== 'error'){
        res.send(results);
    }
})

// POST new todo
app.post('/todos/:date', async (req,res) => {
    const { date } = req.params;
    const { description } = req.body;
    const results = await pg.addNewTodo(description,date);
    console.log(results);
    if(results !== 'error'){
        res.send(results);
    }
})

// PUT toggle todo status
app.put('/todos/toggle-status/:tid', async (req,res) => {
    const { tid } = req.params;
    const results = await pg.toggleTodoStatus(tid);
    console.log(results);
    if(results !== 'error'){
        res.send(results);
    }
})

// DELETE specific todo
app.delete('/todos/:tid', async (req,res) => {
    const { tid } = req.params;
    const results = await pg.deleteTodo(tid);
    console.log(results);
    if(results !== 'error'){
        res.send(results);
    }
})

const port = process.env.PORT || 5000;
app.listen(port, async () => { 
    console.log('listening to port:',port);
});
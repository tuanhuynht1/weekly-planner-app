const express = require('express');
const path = require('path');
const Database = require('./database');
const app = express();

// Connect to database
const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:TT__tt7674@localhost:5432/planner';
const pg = new Database(connectionString);

/* middleware 
--------------------------------------------------------------------------------------*/
app.use(express.static(path.join(__dirname,'/client/build'))); // production build
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

// All other routes will be rendered by React
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname+'client/build/index.html'));
})

const port = process.env.PORT || 5000;
app.listen(port, async () => { 
    console.log('listening to port:',port);
});
const express = require('express');
const path = require('path');
const Database = require('./database');
const app = express();
const pg = new Database('postgresql://postgres:TT__tt7674@localhost:5432/planner');
// const pg = new Database(process.env.DATABASE_URL); // production build

/* middleware 
--------------------------------------------------------------------------------------*/
// production build
// app.use(express.static(path.join(__dirname,'/client/build')));

/* API 
--------------------------------------------------------------------------------------*/

// GET all todos '/todos'




const port = process.env.PORT || 5000;
app.listen(port, async () => console.log('listening to port:',port));
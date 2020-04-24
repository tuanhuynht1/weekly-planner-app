const express = require('express');
const path = require('path');
const Database = require('./database');

const app = express();

// production build
// app.use(express.static(path.join(__dirname,'/client/build')));



const port = process.env.PORT || 5000;
app.listen(port, async () => {
    console.log('listening to port:',port);
    const pg = new Database('postgresql://postgres:TT__tt7674@localhost:5432/perntodo');
    console.log(await pg.test());
});
const express = require('express');
const path = require('path');

const app = express();

// production build
// app.use(express.static(path.join(__dirname,'/client/build')));



const port = process.env.PORT || 5000;
app.listen(port, () => console.log('listening to port:',port));
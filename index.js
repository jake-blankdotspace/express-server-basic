 const express = require('express');

 const app = express();

 // http://localhost:3000/
 app.get('/', (req, res) => {
  res.send('Welcome to the root!')
 });

 // http://localhost:3000/page
 app.get('/page', (req, res) => {
  res.send('The other page...')
 });

 app.listen(3000, function() {
   console.log('Example app listening on port 3000');
 });

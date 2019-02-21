// JavaScript source code
const express = require('express');

const app = express();

//start view engine
app.set('view engine', 'ejs');

//creat home route

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(3000, () => {
    console.log('app now listening on port 3000');
});

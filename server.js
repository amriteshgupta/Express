const express = require('express');
const app = express();

app.set('view engine', 'ejs');


// app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/about', (req, res) => {
    // res.send('About page');
    res.sendFile(path.joint(__dirname, 'index.html'));
})




const userRouter = require('./routes/users');

app.use('/users', userRouter);

function logger(req,res,next){
    console.log(req.originalUrl);
    next();
}


app.listen(3000);
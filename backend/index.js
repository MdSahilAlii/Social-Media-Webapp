// npm init -y ---  initilizing backend and adding pakage.json

//npm i express nodemon mongoose cors dotenv jsonwebtoken  ---- installing this pakages

//"test": "echo \"Error: no test specified\" && exit 1" --- replace it with   ---- "dev": "nodemon index"




// frontend ----- home page , header , footer ,login , signup

//backend ------- user model  and router model only


//importing express
const express = require('express');
const userRouter = require('./router/userRouter');
const postRouter = require('./router/postRouter');
const communityRouter = require('./router/communityRouter');

const cors = require('cors');


//initialize express
const app = express();

const port = 5000;

//middleware
// for taking data from frontend
app.use(cors({
    origin: "http://localhost:3000"
}))

//if data is coming in json then convert in javscript format
app.use(express.json());

app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/community', communityRouter);



//endpoint or route
app.get('/', (req, res) => {
    res.send('response from express');
})

app.get('/add', (req, res) => {
    res.send('response from add');
});

//getall
app.get('/getall', (req, res) => {
    res.send('response from getall');
});

//update
app.get('/update', (req, res) => {
    res.send('response from update')
})



//starting the sever

app.listen(port, () => {
    console.log('server started');
});

const express = require('express');
const dotenv = require('dotenv');
const connection = require('./Config/db');
const UserRouter = require('./Route/route');
dotenv.config();

const app = express();
app.use(express.json());

app.use('/',(req, res) =>{
res.send('This is home endpoint');
});

app.use('/api/',UserRouter);

app.listen(process.env.port,async()=>{
    console.log('listening on port '+process.env.port);
    try {
        await connection
        console.log("connection established")
    } catch (error) {
        console.log("error while listening "+error);
    }
})
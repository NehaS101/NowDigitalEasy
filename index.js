const express = require('express');
const dotenv = require('dotenv');
const connection = require('./Config/db');
const UserRouter = require('./Route/route');
dotenv.config();

//express application
const app = express();
app.use(express.json());

//application routes
app.use('/api',UserRouter);

//home Endpoint
app.use('/',(req, res) =>{
res.send('This is home endpoint');
});

//listening server 
app.listen(process.env.port,async()=>{
    console.log('listening on port '+process.env.port);
    try {
        await connection
        console.log("connection established")
    } catch (error) {
        console.log("error while listening "+error);
    }
})
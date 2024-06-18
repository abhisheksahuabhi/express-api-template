require('dotenv').config();
const express = require('express');
const {connectMongoDb} = require("./src/services/dbConnection")
const userRouter = require("./src/api/Routes/users");
const {logReqRes} = require("./src/api/Middleware/log");
const app = express();
const port = process.env.PORT;

//Connection
connectMongoDb(process.env.MONGO_URL).then(()=>{
    console.log("MongoDb Connected...");
}) //url is not correct
// Middleware - inbult plugin
// app.use(express.urlencoded({extended:false})); 
app.use(express.json())
//Custom Middleware
app.use(logReqRes("log.txt"));
app.get('/',(req,res)=>{
    res.send('App is executed successfully...')
})

app.use("/api/user",userRouter);
app.listen(port, () => {
    console.log(`Server is listening at PORT :: ${port}`)
})


require('dotenv').config();
const express = require('express');
const compression = require('compression');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(compression());

app.get('/',(req,res)=>{
    res.send('App is executed successfully...')
})
app.listen(port, () => {
    console.log(`Server is listening at PORT :: ${port}`)
})


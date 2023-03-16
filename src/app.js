const express = require('express')
const app = express();
const PORT = 9112;
const morgan = require ('morgan');
const cors = require ('cors')
const myDataBase = require('./utilis/database')

app.use(morgan('dev'));
app.use(cors());
app.use(express.json())


myDataBase.authenticate()
.then( ()=>{console.log('DB authenticated')})
.catch ( (error) =>{ console.log(error) } )

myDataBase.sync()
.then( ()=>{console.log('DB sync')})
.catch ( (error) =>{ console.log(error) } )



app.get( '/', (req, res)=>{
    res.status(200).send({message: "Welcome"})
} )

app.listen( PORT, ()=>{
    console.log(`Server runnig at ${PORT}`);
} )
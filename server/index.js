import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

import Connection from './DataBase/db.js'
import DefaultData from './default.js'
import Routes from './routes/route.js'

const app = express();

dotenv.config()

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);

const PORT = 8000

const USERNAME = process.env.DB_USER
const PASSWORD = process.env.DB_PASSWORD

Connection(USERNAME, PASSWORD)

app.listen(PORT , ()=>{
    console.log(`Server successfully listen at port ${PORT}`)

});

DefaultData()
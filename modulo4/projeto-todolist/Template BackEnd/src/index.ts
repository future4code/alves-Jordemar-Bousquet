import knex from 'knex'
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import createUser from './endpoints/createUser'
import getUserById from './endpoints/getUserById'
import editUser from './endpoints/editUser'
import createTask from './endpoints/createTask'
import getTaskbyId from './endpoints/getTaskbyId'

dotenv.config()

export const connection = knex({
// Estabelece conexão com o banco
client: "mysql",
connection: {
host: process.env.DB_HOST,
port: 3306,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_SCHEMA,
multipleStatements: true
}
})


const app = express()
app.use(express.json())

app.use(cors())

app.put('/user',createUser)
app.get('/user/:id',getUserById)
app.post('/user/edit/:id', editUser)
app.put('/task', createTask)
app.get('/task/:id',getTaskbyId)

app.listen(3003, () => { 
    console.log("Server, is running in http://localhost:3003")
   
   })
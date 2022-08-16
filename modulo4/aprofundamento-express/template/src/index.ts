import express, { Request, Response } from 'express'
import cors from 'cors'
import {avazeres} from  "./data";


const app = express()

app.use(cors())
app.use(express.json())

//ex1//
app.get("/ping", (req:Request, res:Response) => {

    res.send("Pong! 🏓")
})

// app.get('/afazeres/:status', (req:Request, res:Response)=>{
//     const status = req.params.status
//     const StatusTarefas = avazeres.map((tarefa)=>{
//             return tarefa.completed
//     })
//     if(status === 'Completas') {
//         res.send(StatusTarefas = true)

//     }
// }) 

app.listen(3003, () => { 
    console.log("Server, is running in http://localhost:3003")
   
   })
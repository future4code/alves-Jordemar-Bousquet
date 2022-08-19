import express, { Request, Response } from 'express'
import cors from 'cors'
import { afazeres } from "./data";


const app = express()

app.use(cors())
app.use(express.json())

//ex1//
app.get("/ping", (req: Request, res: Response) => {

    res.send("Pong! 🏓")
})
//ex4 // 
app.get('/afazeres/:status', (req: Request, res: Response) => {
    const status = req.params.status
    if (status === 'completas') {
        const StatusTarefas = afazeres.filter((tarefa) => {
            return tarefa.completed == true
        })
        res.send(StatusTarefas)
    } else if (status === 'incompletas') {
        const StatusTarefas = afazeres.filter((tarefa) => {
            return tarefa.completed == false
        })
        res.send(StatusTarefas)
    } else {
        res.status(400).send('Erro na Requisição')
    }
})
//ex5 //
app.post('/afazeres',(req:Request, res:Response)=>{
    const {idUser, title, completed} = req.body
    const afazer = afazeres.find((afazeres) => afazeres.id === idUser)
    if(afazer){
    afazeres.push({
        userId:Date.now(),
        id:Date.now(),
        title:title,
        completed:completed
    })
    res.send('Tarefa criada com sucesso!!')
} else{
    res.status(400).send('Erro na requisição')
}
})

//ex7//
app.put('/afazeres/status/:edit',(req:Request, res:Response) =>{
    const id = req.params.id
    afazeres.forEach((tarefas) =>{
        if(tarefas.id === Number(id)){
            return tarefas.completed = !tarefas.completed
        }
    })
    res.send(afazeres)
})

app.listen(3003, () => {
    console.log("Server, is running in http://localhost:3003")

})
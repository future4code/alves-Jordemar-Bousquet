import express, { Request, Response } from 'express'
import cors from 'cors'
import { Conta,contas,Trasacao } from './data'


const app = express()
app.use(express.json())
app.use(cors())


app.post('/users/create',(req:Request, res:Response) =>{
    try {
        const {nome,cpf,nascimentoString} = req.body

        const[dia,mes,ano] = nascimentoString.split('/')

        const nascimento:Date = new Date(`${ano}-${mes}-${dia}`)

        const idadeMiliSegundos:number = Date.now() - nascimento.getTime()

        const idadeAnos = idadeMiliSegundos /1000 / 60 / 60 / 24 / 365 
        
        if(idadeAnos < 18) {
            res.statusCode = 406
            throw new Error('Idade deve ser maior que 18 anos')
        }

        contas.push({
            nome,
            cpf,
            nascimento:nascimento,
            saldo:0,
            extrato:[]
        })
        res.status(201).send('Conta criada com sucesso')

    } catch (error:any) {
        console.log(error)
        res.send(error.message)
    }
})

app.get('/users/all',(req:Request,res:Response) =>{
    try {
        if(!contas.length){
            res.statusCode = 404
            throw new Error('Nenhuma conta encontrada')
        }

        res.status(200).send(contas)
    } catch (error:any) {
        res.status(400).send(error.message)
    }
})

app.listen(3003, () => { 
    console.log("Server, is running in http://localhost:3003")
   
   })
   
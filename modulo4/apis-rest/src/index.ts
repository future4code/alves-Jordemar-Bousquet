import express, { Request, Response } from 'express'
import cors from 'cors'
import { users} from './data'


const app = express()

app.use(express.json())

app.use(cors())

//ex1//
// app.get('/users', (req: Request, res: Response) => {
//     res.status(200).send(users)

// })

//ex2//
// app.get('/users', (req: Request, res: Response) => {
//     let errorCode: number = 400
//     try {
//     const type: string = req.query.type as string
//     const user = users.filter((user) => user.type === type.toUpperCase())
    
//     if(user.length === 0){
//       errorCode = 404;
//       throw new Error("Type não encontrado");
//     }

//     res.status(200).send(user);

//     } catch (error: any) {
//       res.status(errorCode).send({ message: error.message })
//     }


// })

//ex3//
app.get('/users', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
    const name: string = req.query.name as string
    const user = users.find((user) => user.name.toLowerCase() === name.toLowerCase())

    //b//
    if(!user){
      errorCode = 404;
      throw new Error("Name não encontrado");
    }

    res.status(200).send(user);
    
    } catch (error: any) {
      res.status(errorCode).send({ message: error.message })
    }

})

app.post('/users',(req:Request, res:Response) =>{
    let errorCode: number = 400
    try {
    const {id,name,email,type,age} = req.body

    if(!id || !name || !email || !type || !age){
      errorCode = 422;
      throw new Error("Preencha os campos corretamente");
    }

    const newUser = {
        id,
        name,
        email,
        type,
        age
    }
    users.push(newUser)

    res.status(201).send({ message: "Usuário Criado com Sucesso" });

    } catch (error:any) {
        res.status(errorCode).send({ messagem: error.message })
    }
})

app.listen(3003, () => {
    console.log("Server, is running in http://localhost:3003")

})

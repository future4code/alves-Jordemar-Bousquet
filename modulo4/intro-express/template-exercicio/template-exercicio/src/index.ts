import express, { query, Request, Response } from "express";
import cors from 'cors'
import { users } from "./data";

const app = express()

app.use(express.json())
app.use(cors())

//ex1//
app.get("/", (req:Request, res:Response) => {          
    res.send("Hello from Express")
})
//ex4//
app.get('/users', (req:Request, res:Response) =>{
    res.send(users)
})
//ex7//
app.get('/post' ,(req:Request,res:Response) =>{
    const getPost = users.map((post) =>{
        return post.post
    })
    res.send(getPost)
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
    });
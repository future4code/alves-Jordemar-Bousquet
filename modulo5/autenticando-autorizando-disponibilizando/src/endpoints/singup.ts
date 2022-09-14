import { Request, Response } from "express";
import { IdGenerator } from "../services/IdGenerator";

export async function singup(req:Request, res:Response) {
    try {
        const{name, email, password, role} = req.body

        if(!name || !email || !password || !role){
            res.status(422).send("Os campos devem ser TODOS PREENCHIDOS")
        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate
        
    } catch (error:any) {
        res.status(400).send(error.message)
        
    }
}
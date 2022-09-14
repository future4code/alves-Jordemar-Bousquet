import { Request, Response } from "express";
import connection from "../connection";
import { userInsert, userInpust } from "../types";

export default async function createUsers(
    req:Request,
    res:Response
):Promise<void> {
    
    try {
        const{name,email,password}:userInpust = req.body

        if(!name || !email|| !password){

            throw new Error("Os campos devem ser todos  preenchidos")
        }

        const userInsert:userInsert = {
            id:Date.now().toString(),
            name,
            email,
            password
        }

        const id = userInsert.id

        await connection('labecommerce_users')
        .insert({id, name, email, password})

        res.status(200).send(`Usuário ${name} criado com sucesso`).end()
        
    } catch (error:any) {
        res.status(500).send({message:error.message})
    }


}
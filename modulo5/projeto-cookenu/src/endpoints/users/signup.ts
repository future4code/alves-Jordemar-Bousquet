import { Request, Response } from "express";
import connection from "../../connection";
import { generateToken } from "../../services/authenticator";
import { generateHash } from "../../services/hashManager";
import generateId from "../../services/idGenerator";
import { userTableName } from "../../types";

export default async function signup(
    req:Request, 
    res:Response
    ):Promise<void> {
    
        try {
             
            const {name, email,password} = req.body

            const id:string = generateId()

            const cypherPassword = generateHash(password)
            
            if(!name || !email || !password){
                res.statusCode = 422
                throw new Error("Os campos devem ser todos preenchidos")
            }

            if(password.length < 6) {
                res.statusCode = 422
                throw new Error("A senha deve ter no minimo 6 caracteres")
            }

            const [user] = await connection(userTableName)
            .where({email})

            if(user){
                res.statusCode = 409
                throw new Error ('Email já cadastrado')
            }
            
            const token = generateToken({id})

            await connection(userTableName)
            .insert({id, name, email, password:cypherPassword})

            

            res.status(200).send({token})

        } catch (error:any) {
            res.status(500).send(error.message)
        }
}
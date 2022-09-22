import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import { generateHash } from "../services/hashManager";
import generateId from "../services/idGenerator";
import { UserTableName } from "../types";

export default async function signup(
    req:Request,
    res:Response
):Promise<void> {
    
    try {

        const{name, email, password} = req.body

        const id:string = generateId()
        const cypherPassword = generateHash(password)


        if (!name || !email || !password) {
            res.statusCode = 422
            throw new Error("Invalid input. Name, email and password are required")
        }

        if(name.length < 3){
            res.statusCode = 422
            throw new Error("Invalid name. Name must have at least 3 characters")
        }

        if (password.length < 6) {
            res.statusCode = 422
            throw new Error("Invalid password. Password must have at least 6 characters")
        }

        if (email.includes("@") === false) {
            res.statusCode = 422
            throw new Error("Invalid email. Email must contain @")
        }

        const [user] = await connection(UserTableName)
        .where({email})

        if(user){
            res.statusCode = 409
            throw new Error("Invalid email. This email address is already in use")
        }
        
        const token = generateToken({id})

    
        await connection(UserTableName)
        .insert({id, name, email, password:cypherPassword})


        res.status(200).send({token})

        
    } catch (error:any) {
        res.status(500).send(error.message)
    }
}
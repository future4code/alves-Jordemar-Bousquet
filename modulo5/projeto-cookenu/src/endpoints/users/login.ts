import { Request, Response } from "express";
import connection from "../../connection";
import { generateToken } from "../../services/authenticator";
import { compreHash } from "../../services/hashManager";
import { userTableName } from "../../types";

export default async function login(
    req:Request, 
    res:Response
    ):Promise<void> {
        
        try {

            const {email, password} = req.body

            if(!email || !password){
                res.statusCode = 422
                throw new Error("Os campos devem ser preeenchidos")
            }

            const [user] = await connection(userTableName)
            .where({email})

            const passwordIsCorrect: boolean = compreHash(password, user?.password || '') 

            if(!passwordIsCorrect) {
                res.statusCode = 401
                throw new Error ('Email ou Senha inválidos')
            }

            const token = generateToken({id: user.id})

            res.send({token})


            
        } catch (error:any) {

            res.status(500).send(error.message)
        }
} 
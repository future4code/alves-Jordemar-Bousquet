import { Request, Response } from "express";
import connection from "../../connection";
import { getTokenData } from "../../services/authenticator";
import generateId from "../../services/idGenerator";
import { recipeTableName } from "../../types";

export default async function createRecipes(
    req:Request, 
    res:Response
    ):Promise<void> 
    {
        try {
            const token = req.headers.authorization
            const { title,descripition } = req.body

            const tokenData = getTokenData(token!)

            if(!tokenData) {
                res.statusCode = 401
                throw new Error("Não Autorizado")
            }

            if(!title ||!descripition) {
                res.statusCode = 422
                throw new Error("Preencha os campos corretamente")
            }

            

            const id = generateId()

            const createdAt = new Date()

            await connection(recipeTableName)
            .insert({
                id,
                title,
                descripition,
                createdAt,
                author_id:tokenData!.id
            })

            res.send("Receita criada com sucesso!!")

            
        } catch (error:any) {

            res.status(500).send(error.message)
        }
}
import { Request, Response } from "express";
import connection from "../../connection";
import { recipeTableName } from "../../types";

export default async function getRecipesById(
    req:Request, 
    res:Response
    ):Promise<void> 
    {
        try {
            const [recipe] = await connection(recipeTableName)
            .where({id: req.params.id}) 

            if(!recipe) {
                res.statusCode = 404
                throw new Error("Receita não localizada")
            }


            res.send({
                id:recipe.id,
                title:recipe.title,
                descripition:recipe.descripition,
                createdAt:recipe.createdAt
            })
            
        } catch (error:any) {

            res.status(500).send(error.message)
        }
}
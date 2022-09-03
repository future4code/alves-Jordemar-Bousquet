import { Request, Response } from "express";
import connection from "../connection";
import { productInputs, productInsert } from "../types";

export default async function createProduct(
    req:Request,
    res:Response
):Promise <void> {

    try {
        const {name,price,image_url}: productInputs = req.body

        if(!name || !price || !image_url) {
            throw new Error("Os campos devem ser todos preenchidos")
        }

        const productInsert:productInsert={
            id: Date.now().toString(),
            name,
            price,
            image_url
        }

        const id = productInsert.id

        await connection('labecommerce_products')
        .insert({
            id,
            name,
            price,
            image_url
        })
        res.status(200).send(`Produto ${name} cadastrado com sucesso`)
        
    } catch (error:any) {
        res.status(500).send({message:error.message})
    } 
    
} 
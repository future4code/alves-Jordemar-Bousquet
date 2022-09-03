import { Request, Response } from "express";
import connection from "../connection";

export default async function getAllProducts(
    req:Request,
    res:Response
):Promise<void> {
    try {
       const products = await connection('labecommerce_products')
        .select('*')

        res.status(200).send(products)

    } catch (error:any) {
        res.status(500).send({message:error.message})
    }
}
import { Request, Response } from "express";
import connection from "../connection";

export default async function getAllUsers(
    req:Request,
    res:Response
):Promise<void>{
    
   try {
    const users = await connection('labecommerce_users')
    .select('*')

    res.status(200).send(users)
    
   } catch (error:any) {
    res.status(500).send({message:error.message})
   }

}
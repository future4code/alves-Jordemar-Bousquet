import { Request, Response } from "express";
import connection from "../connection";
import { character } from "../types";


export default async function getAllCharacters(
    req:Request,
    res:Response
):Promise<void> {

    try {
        const {name, orderBy, orderType, page} = req.query

        const resultPerPage = 5

        const offset = resultPerPage * (Number(page) -1)

        const characters:character[] = await connection("character")
        .where("name", "LIKE", `%${name}%`)
        .orderBy(orderBy as string || "name", orderType as string)
        .offset(offset)

    res.send(characters)
        
    } catch (error:any) {
        res.status(500).send('Erro Inseperado do Servidor')
    }
}
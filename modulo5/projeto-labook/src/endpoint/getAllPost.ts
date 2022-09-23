import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { PostTableName } from "../types";

export default async function getAllPost(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const token = req.headers.authorization
        const tokenData = getTokenData(token!)

        if (!tokenData) {
            res.statusCode = 401
            throw new Error("Not Authorized!!")
        }

        const [post] = await connection.raw(`
            SELECT content FROM ${PostTableName}
        `)
          
        res.status(200).send({post})


    } catch (error: any) {
        res.status(500).send(error.message)
    }

}
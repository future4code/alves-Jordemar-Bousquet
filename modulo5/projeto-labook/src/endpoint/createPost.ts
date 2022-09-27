import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import generateId from "../services/idGenerator";
import { PostTableName } from "../types";

export default async function createPost(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const token = req.headers.authorization
        const { content } = req.body

        const tokenData = getTokenData(token!)

        if (!tokenData) {
            res.statusCode = 401
            throw new Error("Not Authorized!!")
        }

        if (!content) {
            res.statusCode = 422
            throw new Error("Invalid input. Content is required")
        }


        const id = generateId()

        await connection(PostTableName)
            .insert({
                id,
                content,
                userId: tokenData.id
            })


        res.status(200).send("Post created successfully")


    } catch (error: any) {
        res.status(500).send(error.message)
    }

}
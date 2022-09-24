import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { PostTableName, UserTableName } from "../types";

export default async function deletePost(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const token = req.headers.authorization
        const postId = req.params.id

        const tokenData = getTokenData(token!)

        if (!tokenData) {
            res.statusCode = 401
            throw new Error("Not Authorized!!")
        }

        const [user] = await connection(UserTableName)
            .where({ id: tokenData.id })

        const [postById] = await connection(PostTableName)
            .where({ id: postId })

        if (!postById) {
            res.statusCode = 401
            throw new Error("Post not found")
        }
        if (user.role === "NORMAL") {
            if (postById.userId !== user.id) {
                throw new Error("Not authorized delete this post!!")
            }
        }

        await connection(PostTableName)
            .where(postById)
            .del()


        res.status(200).send('Post deleted')


    } catch (error: any) {
        res.status(500).send(error.message)
    }

}
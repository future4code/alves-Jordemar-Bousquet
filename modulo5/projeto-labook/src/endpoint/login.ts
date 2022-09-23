import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import { compreHash } from "../services/hashManager";
import { UserTableName } from "../types";

export default async function login(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.statusCode = 422
            throw new Error("Invalid input.Email and password are required")
        }

        if (password.length < 6) {
            res.statusCode = 422
            throw new Error("Invalid password. Password must have at least 6 characters")
        }

        if (email.includes("@") === false) {
            res.statusCode = 422
            throw new Error("Invalid email. Email must contain @")
        }

        const [user] = await connection(UserTableName)
            .where({ email })

        if (!user) {
            res.statusCode = 409
            throw new Error("Invalid Email")
        }

        const passwordIsCorrect: boolean = compreHash(password, user?.password || '')

        if (!passwordIsCorrect) {
            res.statusCode = 401
            throw new Error('Invalid Password')
        }

        const token = generateToken({ id: user.id })

        res.status(200).send({ token })



    } catch (error: any) {
        res.status(500).send(error.message)
    }

}
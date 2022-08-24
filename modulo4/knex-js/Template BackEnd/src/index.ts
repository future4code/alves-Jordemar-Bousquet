import { Request, Response } from "express"
import connection from "./connection"
import app from './app'

app.get('/actor/name/:name', async (req: Request, res: Response) => {
    try {
        
        const [result] = await connection.raw(`
          SELECT * FROM Actor WHERE name = ${req.params.name}
        `)
        console.log(result) 

    } catch (error: any) {
        console.log(error.message)
        res.status(500)
            .send("Ocorreu um erro inesperado")
    }

})

app.get('/actor/gender/:gender', async (req: Request, res: Response) => {
    try {
        
        const [result] = await connection.raw(`
          SELECT COUNT(*) as count FROM Actor WHERE gender = ${req.params.gender}
        `)
        console.log(result) 

    } catch (error: any) {
        console.log(error.message)
        res.status(500)
            .send("Ocorreu um erro inesperado")
    }

})
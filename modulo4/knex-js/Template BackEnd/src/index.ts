import { Request, Response } from "express"
import connection from "./connection"
import app from './app'

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
      return result[0][0]
}

const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
  }

  const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
      // Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
      // o valor no resultado!
    const count = result[0][0].count;
    return count;
  };


  app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const actor = await getActorById(id);
  
      res.status(200).send(actor)
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });
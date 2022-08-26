import { Request, Response } from "express";
import moment from 'moment'
import insertTask from "../data/insertTask";

export default async function createTask(
    req:Request,
    res:Response
){
    try {

        if(
            !req.body.title ||
            !req.body.description ||
            !req.body.status ||
            !req.body.deadline ||
            !req.body.authorId
        ){
            res.status(400).send({
                message: "Todos os campos ão obrigatórios"
             })

             return
        }

        const dateDiff:number = moment(req.body.deadline ,'DD/MM/AAAA').unix() - moment().unix()

        if(dateDiff <= 0){

            res.status(400).send({
                message: "Não pode ser uma data que já passou!!"
             })
            
             return
        }

        const id:string = Date.now() + Math.random().toString()

        await insertTask(
            id,
            req.body.title,
            req.body.description,
            req.body.status,
            moment(req.body.deadline, 'DD/MM/YYYY').format('YYYY-MM-DD'),
            req.body.authorId
        )

        res.status(200).send({
            message: "tarefa incluida com sucesso",
            id
         })
        
    } catch (error:any) {
        res.status(400).send({
           message: error.message || error.sqlMessage
        })
    }
}
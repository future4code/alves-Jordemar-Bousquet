import { Request, Response } from "express";
import selecTaskbyId from "../data/selectTaskbyId";
import moment from 'moment'

export default async function getTaskbyId(
    req:Request,
    res:Response
) {
    try {

        const result = await selecTaskbyId(req.params.id)

        if(!result){
            res.status(400).send({
            message:"Tarefa não encontrada"
        })

        return
    }

    res.status(200).send({
        id:result.id,
        title:result.title,
        description:result.description,
        limit_date:moment(result.limit_date, 'YYYY/MM/DD').format('DD/MM/YYYY'),
        status:result.status,
        authorId:result.creator_user_id,
        authorNickName:result.nickname
    })
        
    } catch (error:any) {
        res.status(400).send({
            message:error.message || error.sqlMessage
        })
    }
}
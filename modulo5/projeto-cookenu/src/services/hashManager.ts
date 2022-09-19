import { hashSync, compareSync, genSaltSync } from "bcryptjs";
import dotenv from 'dotenv'

dotenv.config()

export const generateHash = (
    plainText:string
): string => {

    const rounds:number = Number(process.env.BYCRYPT_COST)
    const salt = genSaltSync(rounds)
    return hashSync(plainText , salt)
}
export const compreHash = (
    plainText:string,
    cypherText:string
):boolean => compareSync(plainText,cypherText)
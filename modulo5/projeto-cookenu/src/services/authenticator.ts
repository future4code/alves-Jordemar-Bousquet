import { sign, verify } from "jsonwebtoken";
import dotenv from 'dotenv'
import { authenticationData } from "../types";

dotenv.config()

export const generateToken = (
    payload:authenticationData
):string => sign(
    payload,
    process.env.JWT_KEY!,
    {expiresIn: "1h"}
)

export const getTokenData = (
    token:string
): authenticationData | null => {
        try {

            const{ id } = verify(token, process.env.JWT_KEY!) as authenticationData

            return { id }
            
        } catch (error) {
            return null
        }
}
import * as bycripjs from "bcryptjs";

export class HashManager {
    public async hash(text:string):Promise<string>{
        const rounds = Number(process.env.BRYPT_COST)
        const salt  = await bycripjs.genSalt(rounds)
        return bycripjs.hash(text, salt)
    }

    public async compare(text:string , hash:string):Promise<boolean>{
        return bycripjs.compare(text, hash)
    }
}
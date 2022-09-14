import { User } from "../entities/User";
import { baseDatabase } from "./BaseDatabase";

export class UserDatabase extends baseDatabase{
    public async findUserByEmail(email:string):Promise<User>{
        try {
            const user = await baseDatabase.connection('Lbn_user')
            .select('*')
            .where({email})

            return User.toUserModel(user[0])

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}
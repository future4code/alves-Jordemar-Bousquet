import { User } from "../entities/User";
import { baseDatabase } from "./BaseDatabase";

export class UserDatabase extends baseDatabase{
    public async createUser(user:User):Promise<void>{
        try {
            await baseDatabase.connection("lbn_user").insert({
            id:user.getId(),
            name: user.getName(),
            email:user.getEmail(),
            password:user.getPassoword(),
            role:user.getRole()
        })    
            
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }


    public async findUserByEmail(email:string):Promise<User>{
        try {
            const user = await baseDatabase.connection('Lbn_user')
            .select('*')
            .where({email})

            return user[0] && User.toUserModel(user[0])

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}
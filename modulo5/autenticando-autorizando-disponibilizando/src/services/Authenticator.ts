import * as jwt from 'jsonwebtoken';
import { USER_ROLES } from '../entities/User';

export interface AuthenticatorData {
    id:string,
    role:USER_ROLES
}

export class Authenticator {
    public generate(input: AuthenticatorData):string{
        const token = jwt.sign(input, process.env.JWT_KEY, {
            expiresIn:process.env.ACESS_TOKEN_EXPIRES_IN
        });
        return token
    }

    public getTokenData(token: string):AuthenticatorData{
        const data = jwt.verify(token, process.env.JWT_KEY)
        return data as unknown as AuthenticatorData
    }

}
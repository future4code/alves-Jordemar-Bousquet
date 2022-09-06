import { connection } from "..";

export default async function selecTaskbyId(
    id: string
): Promise<any> {
    const result = await connection.raw(`SELECT tasks.*,users.nickname FROM TodoListTask as tasks JOIN TodoListUser as users ON creator_user_id = users.id WHERE tasks.id =${id};`)

    return result[0][0]
}
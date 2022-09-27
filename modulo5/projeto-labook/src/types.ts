export type authenticationData = {
    id:string
}

 enum ROLE {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
}

export type User = {
    id:string,
    name:string,
    email:string,
    password:string,
    role:ROLE
}

export type Post = {
    id:string,
    content:string,
    userId:string,
    likes:number
}

export const UserTableName = 'Labook_Users'
export const PostTableName = 'Labook_Posts'
export const LikeTableName = 'Labook_Likes'
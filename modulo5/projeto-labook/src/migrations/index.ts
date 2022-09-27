import connection from "../connection"
import { LikeTableName, PostTableName, UserTableName } from "../types"



connection.raw(`
CREATE TABLE IF NOT EXISTS ${UserTableName} (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM ('NORMAL','ADMIN') NOT NULL DEFAULT 'NORMAL'
);

CREATE TABLE IF NOT EXISTS ${PostTableName}(
    id VARCHAR(255) PRIMARY KEY,
    content VARCHAR(255) NOT NULL,
    userId VARCHAR(255), 
    FOREIGN KEY (userId) REFERENCES ${UserTableName} (id)
);

CREATE TABLE IF NOT EXISTS ${LikeTableName}(
    id VARCHAR(255) PRIMARY KEY,
    postId VARCHAR(255), 
    FOREIGN KEY (postId) REFERENCES ${PostTableName} (id),
    userId VARCHAR(255), 
    FOREIGN KEY (userId) REFERENCES ${UserTableName} (id)
);
`)

    .then(() => console.log(
    "Tabelas criadas com sucesso"
    )).catch((err)=>console.log(
        err.message
        )).finally(()=> {
            connection.destroy()
        })

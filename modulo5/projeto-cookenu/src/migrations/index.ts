import connection from "../connection"
import { recipeTableName, userTableName } from "../types"



connection.raw(`

CREATE TABLE IF NOT EXISTS ${userTableName} (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS ${recipeTableName} (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    descripition VARCHAR(1555) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    author_id VARCHAR(255),
    FOREIGN KEY (author_id) REFERENCES ${userTableName} (id)
);

`).then(() => console.log(
    "Tabelas criadas com sucesso"
    )).catch((err)=>console.log(
        err.message
        )).finally(()=> {
            connection.destroy()
        })
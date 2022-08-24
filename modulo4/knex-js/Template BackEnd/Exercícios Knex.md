### Exercício 1 
a.
o raw retorna uma resposta de requisição ao banco de dados SQL diretamente do codigo

b.
app.get('/actor/:name', async (req: Request, res: Response) => {
    try {
        
        const [result] = await connection.raw(`
          SELECT * FROM Actor WHERE name = ${req.params.name}
        `)
        console.log(result) 

    } catch (error: any) {
        console.log(error.message)
        res.status(500)
            .send("Ocorreu um erro inesperado")
    }

})

c.app.get('/actor/gender/:gender', async (req: Request, res: Response) => {
    try {
        
        const [result] = await connection.raw(`
          SELECT COUNT(*) as count FROM Actor WHERE gender = ${req.params.gender}
        `)
        console.log(result) 

    } catch (error: any) {
        console.log(error.message)
        res.status(500)
            .send("Ocorreu um erro inesperado")
    }

})


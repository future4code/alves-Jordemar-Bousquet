import express, { Request, Response } from 'express'
import cors from 'cors'
import { Conta,contas,Trasacao } from './data'


const app = express()
app.use(express.json())
app.use(cors())

// Adicionar Contas
app.post('/clients/create',(req:Request, res:Response) =>{
    try {
        const {nome,cpf,nascimento} = req.body

        //validação de preenchimento dos dados //
        if(!nome|| !cpf|| !nascimento) {
            res.statusCode = 400
            throw new Error('Não foi possivel cadastrar o cliente , confira os dados preenchidos ')
        }


        const[dia,mes,ano] = nascimento.split('/')
        const DataNascimento:Date = new Date(`${ano}-${mes}-${dia}`)
        const idadeMiliSegundos:number = Date.now() - DataNascimento.getTime()
        const idadeAnos = idadeMiliSegundos /1000 / 60 / 60 / 24 / 365 

        //validação de idade maior que 18
        if(idadeAnos < 18) {
            res.statusCode = 406
            throw new Error('Idade deve ser maior que 18 anos')
        }

        const IndexCliente = contas.findIndex(cliente => cliente.cpf === cpf)

        //Validação de Cpf Cadastado
        if(IndexCliente >= 0){
            res.statusCode = 409
            throw new Error('Já existe um cliente cadastrado com este cpf')
        }


        //Criar Conta 
        const novaConta:Conta = {
            id:contas.length+1 ,
            nome,
            cpf,
            nascimento:DataNascimento,
            saldo:100,
            extrato:[]
        }

        contas.push(novaConta)
        res.status(201).send('Conta criada com sucesso')

    } catch (error:any) {
        if (res.statusCode == 200){
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
        
    }
})
// Consulltar Contas Cadastradas
app.get('/clients/all',(req:Request,res:Response) =>{
    try {
        if(!contas.length){
            res.statusCode = 404
            throw new Error('Nenhuma conta encontrada')
        }

        res.status(200).send(contas)
    } catch (error:any) {
        res.status(400).send(error.message)
    }
})
// Consultar Saldo por Cpf Cadastrado
app.get('/clients/balance/:cpf',(req:Request,res:Response) =>{
    try {
        const cpf = req.params.cpf
        const client = contas.find(c => c.cpf == cpf)

        if(!client){
            res.statusCode = 404
            throw new Error("Cliente não encontrado")
        }
        res.status(200).send({saldo: client.saldo})
    } catch (error:any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
})
//Pagamento de um Cliente
app.post('/clients/:cpf/payment',(req:Request,res:Response)=>{
    try {
        const cpf = req.params.cpf
        const {valor, descricao} = req.body
        let {data} = req.body
        // Confere se há algum preencimento na data de pagamento 
        if(!data){
            data = Date.now()
        }

        const[dia,mes,ano] = data.split('/')
        const DataFormatada:Date = new Date(`${ano}-${mes}-${dia}`)

        // Valida dados preenchidos de valor e descrição
        if (!valor || !descricao) {
            res.statusCode = 400
            throw new Error("Não foi possível realizar o pagamento, confira os dados preenchidos ")
        }

        const IndexCliente = contas.findIndex(client => client.cpf === cpf)
        // Verifica se o CPF já está cadastrado, se for um valor abaixo de 0, então não existe um cliente com o mesmo CPF, no caso sempre vai retornar -1 se não existir na lista.
        if (IndexCliente < 0) {
            res.statusCode = 404
            throw new Error("Cliente não encontrado")
        }
        const cliente = contas[IndexCliente]

        const novaTransacao: Trasacao = {
            valor,
            data:DataFormatada,
            descricao
        }

        // O método Math.abs() retorna o valor absoluto de um número, ou seja, o valor sem sinal negativo. Ao se passar um número negativo, o método retorna o valor positivo. Mas se passarmos um número positivo, o método retorna o mesmo número. Por exemplo, o método Math.abs(-10) retorna 10. O método Math.abs(10) retorna 10. Poderiamos ter usado value * -1, mas o método Math.abs() é mais eficiente.
        if (Math.abs(valor) > cliente.saldo) {
            res.statusCode = 406
            throw new Error("Saldo insuficiente")
        }

        cliente.extrato.push(novaTransacao)
        res.status(201).send("Pagamento realizado com sucesso")

    } catch (error:any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
})

//Deposito de Cliente 
app.put('/clients/:cpf/:nome/deposit',(req:Request,res:Response) =>{
    try {
        const {cpf, nome} = req.params
        const {valor, descricao} = req.body
        let {data} = req.body

        if(!data){
            data = Date.now()
        }

        const[dia,mes,ano] = data.split('/')
        const DataFormatada:Date = new Date(`${ano}-${mes}-${dia}`)

        if (!cpf || !nome || !valor || !descricao || !data) {
            res.statusCode = 400
            throw new Error("Não foi possível atualizar o cliente, verifique os dados preenchidos")
        }

        const IndexCliente = contas.findIndex(client => client.cpf === cpf && client.nome.toLowerCase() === nome.toLowerCase())

        if (IndexCliente < 0) {
            res.statusCode = 404
            throw new Error("Não foi possível atualizar o cliente, não existe um cliente cadastrado com esse CPF e nome")
        }

        contas[IndexCliente].extrato.push({
            valor,
            data: DataFormatada,
            descricao
        })

        res.status(200).send("Deposito realizado com sucesso")
        
    } catch (error:any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }   
    }  
})


app.listen(3003, () => { 
    console.log("Server, is running in http://localhost:3003")
   
   })
   
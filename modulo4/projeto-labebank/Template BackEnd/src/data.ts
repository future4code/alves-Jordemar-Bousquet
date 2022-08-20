export type Trasacao ={
    valor:number,
    data:Date,
    descricao:string,
}


export type Conta ={
    nome:string,
    cpf:string,
    nascimento:Date,
    saldo:number,
    extrato:Trasacao[]
}



export const contas:Conta[]=[]
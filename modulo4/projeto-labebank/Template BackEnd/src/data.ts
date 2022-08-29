export type Trasacao ={
    valor:number,
    data:Date,
    descricao:string,
}


export type Conta ={
    id:number,
    nome:string,
    cpf:string,
    nascimento:Date,
    saldo:number,
    extrato:Trasacao[]
}



export const contas:Conta[]=[]
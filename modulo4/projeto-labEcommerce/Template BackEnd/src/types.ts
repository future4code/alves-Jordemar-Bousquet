export type userInpust = {
    name:string,
    email:string,
    password:string
}

export type userInsert ={
    id:string,
    name:string,
    email:string,
    password:string

}

export type productInputs = {
    name:string,
    price:number,
    image_url:string
}

export type productInsert = {
    id:string,
    name:string,
    price:number,
    image_url:string
}

export type userData ={
    id:string,
    name:string,
    email:string,
    password:string

}

export type productData = {
    id:string,
    name:string,
    price:number,
    image_url:string
}

export type purchaseData = {
    id:string,
    userId:string,
    productId:string
    quantity:number,
    totalPrice:number
}

export type AllPurchasesPerson = {
    idDaCompra: string,
    NomeDoProduto : string,
    Quantidade:number,
    TotalPreco:number
}

export type PurchasesByUser = {
    idPessoa: string,
    nomePessoa: string
    compras: AllPurchasesPerson[]
}
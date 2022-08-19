function pessoa(nome:string, nascimento:string){
    const data = nascimento.split('/',3)
    return `Olá me chamo ${nome}, nasci no dia ${data[0]} do mês ${data[1]} do ano de ${data[2]}`
    

}

console.log(pessoa('Joao','02/04/1988'))
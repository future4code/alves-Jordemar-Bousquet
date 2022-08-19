const AnosPassadoss = (data:string):number =>{
    const dataAtual = new Date()
    const [dia,mes,ano] = data.split('/')

    let anos = dataAtual.getFullYear() - Number(ano)
    if(
        dataAtual.getMonth() + 1 <  Number(mes)
        ||
        dataAtual.getMonth() + 1 ===  Number(mes)
        &&
        dataAtual.getMonth() + 1 <  Number(dia)
    ){
        anos --
    }
    return anos
}



const RenovarCarteira = (dataNascimento:string,dataEmissao:string):boolean =>{
    let PrecisaRenovar = false
    const idade = AnosPassadoss(dataNascimento)
    const tempoDeEmissao = AnosPassadoss(dataEmissao)
    if(idade < 20 && tempoDeEmissao >= 5) {
        PrecisaRenovar = true
    } else if(idade > 20 && idade <= 50 && tempoDeEmissao >=10 ){
        PrecisaRenovar = true
    } else if (idade > 50 && tempoDeEmissao >= 15 ){
        PrecisaRenovar = true
    }
    
    return PrecisaRenovar

}

console.log(RenovarCarteira('20/02/2001','20/03/2003'))
console.log(RenovarCarteira('30/05/2001','20/03/2021'))
console.log(RenovarCarteira('31/05/2001','20/03/2010'))
console.log(RenovarCarteira('03/11/2001','20/03/2020'))
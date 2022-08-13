const operacao = process.argv[2]
const primeiroNumero = Number(process.argv[3])
const segundoNumero = Number(process.argv[4])

switch(operacao){
    case "add":
       const add = primeiroNumero + segundoNumero
        console.log('Resposta:',add)
        break
    case "sub":
        const sub = primeiroNumero - segundoNumero
        console.log('Resposta:',sub)
        break
    case "multi":
        const multi =  primeiroNumero * segundoNumero
        console.log('Resposta:',multi)
        break
    case "div":
        const div = primeiroNumero/segundoNumero
        console.log('Resposta:',div)
        break
    default:
    'Operacão não realizada'

}
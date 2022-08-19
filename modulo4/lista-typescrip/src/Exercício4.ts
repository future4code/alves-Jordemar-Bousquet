import { getConstantValue } from "typescript"

enum setor{
    MARKETING = 'marketing',
    VENDAS ='vendas',
    FINANCEIRO ='financeiro',

}

type colaborador = {
    nome:string,
    salário:number,
    setor:setor,
    presencial:boolean,
}



const pessoas = [
	{ nome: "Marcos", salário: 2500, setor:setor.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor:setor.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor:setor.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor:setor.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: setor.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor:setor.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor:setor.MARKETING, presencial: true }
]



function RetornaMarketingPresencial(value:any) {
    if(value.setor === setor.MARKETING && value.presencial === true)
        return value
}

const MarketingPresencial = pessoas.filter(RetornaMarketingPresencial)
    MarketingPresencial.forEach(funcionario => {
        console.log(funcionario)
    })
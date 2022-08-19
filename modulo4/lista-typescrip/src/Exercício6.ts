type clientes = {
    cliente:string,
    saldoTotal:number,
    debitos:number[]

}


const ContasClientes:clientes[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]



const ListaSaldoNegativo = (ContasClientes:clientes[]):clientes[] =>{
    ContasClientes.forEach((cliente) =>{
        let soma = 0
        const SomaDebitos = cliente.debitos.reduce((a, b)=>
          a+b,soma

        )
        cliente.saldoTotal = cliente.saldoTotal - SomaDebitos
        cliente.debitos=[]
    })
    const contasNegativas = ContasClientes.filter((conta) => conta.saldoTotal < 0);
  return contasNegativas;

}

console.log(ListaSaldoNegativo(ContasClientes))
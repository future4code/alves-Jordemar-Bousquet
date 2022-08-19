enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function CatalogoFilme(nome:string, ano:number, genero:GENERO, pontuacao?:number){
        const filme= {
            nome:nome,
            ano:ano,
            genero:genero,
            pontuacao:pontuacao
        }
        console.log(filme)
}

CatalogoFilme('Duna',2021,GENERO.ACAO,74)


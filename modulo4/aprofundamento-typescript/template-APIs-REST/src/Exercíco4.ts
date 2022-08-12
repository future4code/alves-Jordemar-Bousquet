//a.  Crie um arquivo chamado exercicio-4.ts , cole o código abaixo e use comentários para responder as questões.

//b.  Como você faria, já com a extensão instalada, para transpilar(converter) esse arquivo typescript em um arquivo javascript?
//Resposta - Com a extensão instalada usaria o comando no termial tsc + nome do arquivo

// c. E se este arquivo estivesse dentro de uma pasta chamada src. O processo seria diferente? Se sim, descreva as diferenças.
//Resposta - só usar o comando tsc /src + nome do arquivo 

//d. Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.
// Resposta - Dar o comando tsc + nome do aqruivo1 ,nome do arquivo2, e assim sucessivamente .


type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}
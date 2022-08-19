const anagrama = (palavra:string): number =>{
    let fatorial = 1

    for(let i = palavra.length; i >=1; i-- )
        fatorial *= i

    return fatorial
}

console.log(anagrama('mesa'))
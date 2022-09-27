import { getLength, users, IUser, randomNumberBetween1And10, toNumber, toSplit, toUpperCase } from "./Exercícios"

describe("Exercícios", () => {
    test("1 - A palavra 'bananinha' deve retornar toda em maiúscula", () => {
        const input = toUpperCase('bananinha')
        const response = 'BANANINHA'

        expect(input).toBe(response)
    })
    test("2 -Recebe uma frase e retorna um array com as letras separadas ", () => {
        const input = toSplit('dev')
        const response = ["d", "e", "v"]

        expect(input).toEqual(response)
    })
    test("3- Recebe um número em string e retorna um number", () => {
        const input = toNumber('50')
        const response = 50

        expect(input).toBe(response)
    })
    test("4- Recebe umma string e retorna a quantidade de caracteres", () => {
        const input = getLength('jest')
        const response = 4

        expect(input).toBe(response)
    })
    test("5 - Gera um número aleatório entre 1 e 10", () => {
        const input = randomNumberBetween1And10()
        const compare = input < 10
        const response = compare === true

        expect(compare).toEqual(response)
    })
    test("6- Garante que 'Astrodev' está na lista de usuários", () => {
        const user: IUser = 
            {
                id: "3",
                name: "Astrodev",
                age: 50
            }
 
        expect(users).toContainEqual(user)
     })
})
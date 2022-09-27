/// Exercício1

export const toUpperCase = (str: string): string => {
	return str.toUpperCase()
}

/// Exercício2 
export const toSplit = (str: string): string[] => {
	return str.split("")
}

//Exercício3
export const toNumber = (str: string): number => {
	return Number(str)
}

//Exercício4 

export const getLength = (str: string): number => {
	return str.length
}

//Exercício5
export const randomNumberBetween1And10 = (): number => {
    const min = 1
const max = 10
    const result = Math.floor(Math.random() * (max - min + 1)) + min

    return result
}

//Exercício6 

export interface IUser {
    id: string,
    name: string,
    age: number
}

export const users: IUser[] = [
    {
        id: "1",
        name: "Alice",
        age: 20
    },
    {
        id: "2",
        name: "Bob",
        age: 18
    },
    {
        id: "3",
        name: "Astrodev",
        age: 50
    }
]
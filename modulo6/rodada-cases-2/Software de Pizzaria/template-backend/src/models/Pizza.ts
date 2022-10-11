
export interface IPizzaDB {
    name:string,
    price:number
}

export interface IIngredientsDB {
    name:string,
}

export interface IPizzasIgredientsDB {
    pizza_name:string,
    ingredient_name:string
}

export class Pizza {
    constructor(
        private name: string,
        private price: number,
        private ingredients: string[]
    ) {}


    public getName = () => {
        return this.name
    }

    public getPrice = () => {
        return this.price
    }

    
    public getIngredients = () => {
        return this.ingredients
    }


    public setName = (newName: string) => {
        this.name = newName
    }

    public setPrice = (newprice: number) => {
        this.price = newprice
    }

    public setIngredients = (newIngredients: string[]) => {
        this.ingredients = newIngredients
    }

    public addIngredients = (newIngredients: string) => {
        this.ingredients.push(newIngredients)
    }

    public removeIngredients = (ingredientsToRemove: string) => {
        return this.ingredients.filter(ingredient  => ingredient ! === ingredientsToRemove)
    }


}
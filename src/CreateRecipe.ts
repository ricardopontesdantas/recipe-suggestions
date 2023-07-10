export default class CreateRecipe {
    async execute(input: Input): Promise<Output> {
        if (!input.description) throw new Error("Invalid description");
        if (!input.ingredients.length) throw new Error("Invalid ingredients");
        const output = {
            description: input.description
        }
        return output;
    }
}

type Input = {
    idRecipe: string,
    description: string,
    ingredients: { idIngredient: number; quantity: string; }[]
}

type Output = {
    description: string
}
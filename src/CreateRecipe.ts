import IngredientRepositoryDatabase from "./IngredientRepositoryDatabase";
import RecipeRepositoryDatabase from "./RecipeRepositoryDatabase";

export default class CreateRecipe {
    async execute(input: Input): Promise<Output> {
        if (!input.description) throw new Error("Invalid description");
        if (!input.ingredients.length) throw new Error("Invalid ingredients");
        const recipe: Recipe = {
            idRecipe: input.idRecipe,
            description: input.description,
            ingredients: []
        }
        const ingredientRepositoryDatabase = new IngredientRepositoryDatabase();
        for (const ingredient of input.ingredients) {
            const ingredientData = await ingredientRepositoryDatabase.get(ingredient.idIngredient);
            recipe.ingredients.push({ 
                idIngredient: ingredientData.id_ingredient, 
                description: ingredientData.description,
                quantity: ingredient.quantity
            });
        }
        const recipeRepositoryDatabase = new RecipeRepositoryDatabase();
        await recipeRepositoryDatabase.save(recipe);
        const output = {
            description: input.description,
            amountIngredients: input.ingredients.length
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
    description: string,
    amountIngredients: number
}

type Recipe = {
    idRecipe: string,
    description: string,
    ingredients: any[]
}
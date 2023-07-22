export default class Recipe {
    ingredients: any[] = [];

    constructor(readonly idRecipe: string, readonly description: string) {}

    addIngredient(ingredient: any) {
        this.ingredients.push(ingredient);
    }
}
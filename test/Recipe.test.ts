import crypto from "crypto"
import Recipe from "../src/Recipe";

test("should create a recipe", function() {
    const idRecipe = crypto.randomUUID();
    const recipe = new Recipe(idRecipe, "omelete");
    expect(recipe.idRecipe).toBe(idRecipe);
});

test("should add an ingredient", function() {
    const idRecipe = crypto.randomUUID();
    const recipe = new Recipe(idRecipe, "omelete");
    recipe.addIngredient({ idIngredient: 1, quantity: "2" });
    recipe.addIngredient({ idIngredient: 2, quantity: "1/2" });
    recipe.addIngredient({ idIngredient: 3, quantity: "1/4" });
    recipe.addIngredient({ idIngredient: 4, quantity: "1/2 colher de sopa" });
    expect(recipe.ingredients.length).toBe(4);
});
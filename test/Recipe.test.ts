import crypto from "crypto"
import Recipe from "../src/Recipe";

test("should create a recipe", function() {
    const idRecipe = crypto.randomUUID();
    const recipe = new Recipe(idRecipe, "omelete");
    expect(recipe.idRecipe).toBe(idRecipe);
});
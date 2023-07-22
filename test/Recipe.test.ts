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
    recipe.addItem(1, "2");
    recipe.addItem(2, "1/2");
    recipe.addItem(3, "1/4");
    recipe.addItem(4, "1/2 colher de sopa");
    expect(recipe.items.length).toBe(4);
});
});
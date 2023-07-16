import CreateRecipe from "../src/CreateRecipe";

test("should create a new recipe", async function() {
    const input = {
        idRecipe: "8a0ba637-792a-44ca-8957-63845d260524",
        description: "omelete",
        ingredients: [
            { idIngredient: 1, quantity: "2" },
            { idIngredient: 2, quantity: "1/2" },
            { idIngredient: 3, quantity: "1/4" },
            { idIngredient: 4, quantity: "1/2 colher de sopa" },
        ]
    }
    const createRecipe = new CreateRecipe();
    const output = await createRecipe.execute(input);
    expect(output.description).toBe("omelete");
    expect(output.amountIngredients).toBe(4);
});
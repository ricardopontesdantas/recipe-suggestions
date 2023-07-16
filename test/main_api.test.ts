import axios from "axios";

axios.defaults.validateStatus = function() {
    return true;
}

test("should not create a recipe whitout description", async function() {
    const input = {
        idRecipe: "8a0ba637-792a-44ca-8957-63845d260524",
        description: "",
        ingredients: [
            { idIngredient: 1, quantity: "2" },
            { idIngredient: 2, quantity: "1/2" },
            { idIngredient: 3, quantity: "1/4" },
            { idIngredient: 4, quantity: "1/2 colher de sopa" },
        ]
    }
    const response = await axios.post("http://localhost:3000/recipes", input);
    const output = response.data;
    expect(output.message).toBe("Invalid description");
});

test("should not create a recipe whitout ingredients", async function() {
    const input = {
        idRecipe: "8a0ba637-792a-44ca-8957-63845d260524",
        description: "omelete",
        ingredients: []
    }
    const response = await axios.post("http://localhost:3000/recipes", input);
    const output = response.data;
    expect(output.message).toBe("Invalid ingredients");
});

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
    const response = await axios.post("http://localhost:3000/recipes", input);
    const output = response.data;
    expect(output.description).toBe("omelete");
    expect(output.amountIngredients).toBe(4);
});
import axios from "axios";

test("shoud show hello world message", async function() {
    const response = await axios.get("http://localhost:3000/hello-world");
    const output = response.data;
    expect(output.message).toBe("hello world");
})

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
    const response = await axios.post("http://localhost:3000/recipe", input);
    const output = response.data;
    expect(output.description).toBe("omelete");
    expect(output.ingredients.length).toBe(4);
});
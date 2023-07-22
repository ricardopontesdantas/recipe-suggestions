import Ingredient from "../src/Ingredient";
import Item from "../src/Item";

test("should not create an item with invalid quantity", function() {
    const ingredient = new Ingredient(1, "ovo");
    expect(() => new Item(ingredient.idIngredient, "")).toThrow(new Error("Invalid quantity"));
});
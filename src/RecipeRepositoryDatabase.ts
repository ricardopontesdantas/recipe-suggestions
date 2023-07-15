import RecipeRepository from "./RecipeRepository";
import pgp from "pg-promise";

export default class RecipeRepositoryDatabase implements RecipeRepository {
    async save(recipe: any): Promise<void> {
        const connection = pgp()("postgres://docker:ignite@localhost:5432/local");
        await connection.query("insert into recipes.recipe (id_recipe, description) values ($1, $2)", [recipe.idRecipe, recipe.description]);
        await connection.$pool.end();
    }
}
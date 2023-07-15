import IngredientRepository from "./IngredientRepository";
import pgp from "pg-promise";

export default class IngredientRepositoryDatabase implements IngredientRepository {
    async get(idIngredient: number): Promise<any> {
        const connection = pgp()("postgres://docker:ignite@localhost:5432/local");
        const [ingredientData] = await connection.query("select * from recipes.ingredient where id_ingredient = $1", [idIngredient]);
        await connection.$pool.end();
        return ingredientData;
    }
}
export default interface IngredientRepository {
    get(idIngredient: number): Promise<any>;
}
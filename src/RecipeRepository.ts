export default interface RecipeRepository {
    save(recipe: any): Promise<void>;
}
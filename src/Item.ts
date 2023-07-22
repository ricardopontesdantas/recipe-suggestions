export default class Item {
    constructor(readonly idIngredient: number, readonly quantity: string) {
        if (!this.quantity.trim().length) throw new Error("Invalid quantity");
    }
}
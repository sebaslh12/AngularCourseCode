import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    startedEditing = new Subject<number>();

    getIngredients() {
        return this.ingredients;
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    onIngredientAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index,1)
    }
}
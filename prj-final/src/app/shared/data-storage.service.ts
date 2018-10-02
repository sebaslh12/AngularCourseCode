import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";

@Injectable()

export class DataStorageService {
    backendUrl = 'https://ng-recipe-book-f1fdb.firebaseio.com/'

    constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) { }

    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put(this.backendUrl + 'recipes.json?auth=' + token, this.recipeService.getRecipes()).map((response: Response) => {
            return response.json();
        }).catch((error: Response) => {
            return Observable.throw(error.status);
        });
    }

    getRecipes() {
        const token = this.authService.getToken();

        this.http.get(this.backendUrl + 'recipes.json?auth=' + token).map((response: Response) => {
            const recipes = response.json();
            for (let recipe of recipes) {
                if (!recipe.ingredients) {
                    console.log(recipe);
                    recipe.ingredients = []
                }
            }
            return recipes;
        }).subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes)
                return recipes;
            },
            (error: Response) => {
                console.log(error.status);
            });
    }
}
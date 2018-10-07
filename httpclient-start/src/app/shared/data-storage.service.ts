import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from "@angular/common/http";
import 'rxjs/Rx';

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";


@Injectable()

export class DataStorageService {
    backendUrl = 'https://ng-recipe-book-f1fdb.firebaseio.com/'

    constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

    storeRecipes() {
        /* return this.httpClient.put(this.backendUrl + 'recipes.json', this.recipeService.getRecipes(), {
            observe: 'events',
            reportProgress:true,
            //params: new HttpParams().set('auth',token)
            //headers: new HttpHeaders().set('Authorization', 'Bearer akosdjakls');
        }); */

        const req = new HttpRequest('PUT', this.backendUrl + 'recipes.json', this.recipeService.getRecipes(), { reportProgress: true });

        return this.httpClient.request(req);
    }

    getRecipes() {
        this.httpClient.get<Recipe[]>(this.backendUrl + 'recipes.json').map((recipes) => {
            console.log(recipes);
            for (let recipe of recipes) {
                if (!recipe.ingredients) {
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
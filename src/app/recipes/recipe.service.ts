import { EventEmitter, Injectable } from '@angular/core'
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { shoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    constructor(private slService: shoppingListService){

    }

    private recipes: Recipe[] = [new Recipe('Fajita recipe', 'Just a test', 'https://c1.peakpx.com/wallpaper/872/55/643/cream-bowl-still-life-rocks-lavender-wallpaper-preview.jpg',
        [
            new Ingredient('Capsicum', 9),
            new Ingredient('Turmeric', 1)
        ]),
    new Recipe('Fajita recipe second  ', 'second', 
    'https://c1.peakpx.com/wallpaper/872/55/643/cream-bowl-still-life-rocks-lavender-wallpaper-preview.jpg', 
    [new Ingredient('Salt', 4)])];

    recipeSelected = new EventEmitter<Recipe>();
    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number){
       return this.recipes[index];
    }


    addToShoppingList( ingredients:Ingredient[]){
this.slService.addIngredients(ingredients);
    }

}
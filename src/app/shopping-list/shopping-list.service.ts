import { EventEmitter } from '@angular/core';
import { Ingredient,  } from '../shared/ingredient.model';


export class shoppingListService{

private ingredients : Ingredient[] = [new Ingredient('Apples', 5),
    new Ingredient('Potatoes', 8)];
    
onIngredientsChanged = new EventEmitter<Ingredient[]>();

getIngredients(){
  return  this.ingredients.slice();
}

addIngredient(ingredient:Ingredient){

    this.ingredients.push(ingredient);
    
    this.onIngredientsChanged.emit(this.ingredients.slice());
}

addIngredients(ingredients: Ingredient[]){
  
    this.ingredients.push(...ingredients);
    this.onIngredientsChanged.emit(this.ingredients.slice());

}
}
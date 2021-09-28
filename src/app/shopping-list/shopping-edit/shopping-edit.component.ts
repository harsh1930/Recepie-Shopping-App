import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { shoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput', {static: false}) nameInputRef : ElementRef;
 @ViewChild('amountInput', {static: false}) amountInputRef : ElementRef;



  constructor(private shoppingListService : shoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient(){
// const newingredient = new Ingredient(this.nameInputRef.nativeElement.value, 
//   this.amountInputRef.nativeElement.value)
//   this.ingredientAdded.emit(newingredient); 
const nameRef = this.nameInputRef.nativeElement.value;
const amountRef=  this.amountInputRef.nativeElement.value;
let ingredient = new Ingredient(nameRef ,amountRef)
this.shoppingListService.addIngredient(ingredient);
  }
}

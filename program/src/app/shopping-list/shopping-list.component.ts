import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Banana',10)
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient); //ingredient is pulled from the "ingredientAdded" event
  }
  clearAll( e ){
    this.ingredients = [];
  };
}

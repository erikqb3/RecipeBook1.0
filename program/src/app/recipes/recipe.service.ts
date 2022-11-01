import { Injectable, EventEmitter } from '@angular/core';
// import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  // recipeSelected = new EventEmitter<Recipe>();
  // recipeSelected = new Subject<Recipe>(); //Dont need this because of routing

  private recipes: Recipe[] = [
    new Recipe('Mimikyu Frightful Feast',"This is a test recipe","assets/RecipeImg.jpg", [new Ingredient('Meat',1), new Ingredient("Cheese",3)]),
    new Recipe('Big Fat Burger',"This is a test recipe","assets/RecipeImg.jpg", [new Ingredient('Buns',2)]),
    
  ]

  constructor(private slService:ShoppingListService) { }
    
    // new Recipe('TestRecipe',"This is a test recipe","assets/RecipeImg.jpg")
  // )
  // ];

  getRecipe(index: number) {
    return this.recipes[index];
  }

  getRecipes(){ //allows access from outside whereas private prohibits it
    return this.recipes.slice(); //.slice will return new array (a copy) of current one so it can't be altered
  }

  addIngredientsToShopppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients)
  }

 
}

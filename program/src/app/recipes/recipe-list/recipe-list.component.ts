import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>(); //@Output allows us to listen to this event from the outside/Parent component
  recipes: Recipe[] = [
    new Recipe('Mimikyu Frightful Feast',"This is a test recipe","assets/RecipeImg.jpg"),
    new Recipe('TestRecipe',"This is a test recipe","assets/RecipeImg.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe); //triggers the recipeWasSelected event by using "recipe"
  }
}

import { R3BoundTarget } from '@angular/compiler';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>(); //@Output allows us to listen to this event from the outside/Parent component
  // recipes: Recipe[] = [
  //   new Recipe('Mimikyu Frightful Feast',"This is a test recipe","assets/RecipeImg.jpg"),
  //   new Recipe('TestRecipe',"This is a test recipe","assets/RecipeImg.jpg")
  // ];

  recipes: Recipe[];
  subscript: Subscription;


  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.subscript = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      )
    this.recipes = this.recipeService.getRecipes();
  }
  ngOnDestroy(): void {
    this.subscript.unsubscribe();
  }

  // onRecipeSelected(recipe: Recipe){
  //   this.recipeWasSelected.emit(recipe); //triggers the recipeWasSelected event by using "recipe"
  // }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route}) //navigate to url of current route with 'new' appended to it
  }
}

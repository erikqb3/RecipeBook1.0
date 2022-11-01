import { Component, OnInit } from '@angular/core';
// import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
// import { RecipeService } from './recipe.service'; //Bro Thayne doesnt want us doing this

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  //providers: [RecipeService] //Bro Thayne doesnt want us doing this
})
export class RecipesComponent implements OnInit {
  // selectedRecipe: Recipe; //DON"T NEED THIS BECAUSE OF ROUTING

  // constructor(private recipeService: RecipeService) { }  //DON"T NEED THIS BECAUSE OF ROUTING
  constructor() { }

  ngOnInit(): void {
    // this.recipeService.recipeSelected //DON"T NEED THIS BECAUSE OF ROUTING
    //   .subscribe(
    //     (recipe: Recipe) => {
    //       this.selectedRecipe = recipe;
    //     }
    //   )
  }

}

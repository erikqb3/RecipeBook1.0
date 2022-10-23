import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  // @Input() recipe: Recipe; //@Input allows it to be set from outside, whatever is clicked. //don't need Input when doing routing
  
  constructor(private recipeService:RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.params['id']; //only works when initizliaed/loaded for the first time
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );

  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShopppingList(this.recipe.ingredients)
  }

}

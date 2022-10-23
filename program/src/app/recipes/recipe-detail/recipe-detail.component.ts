import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe; //@Input allows it to be set from outside, whatever is clicked.
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShopppingList(this.recipe.ingredients)
  }

}

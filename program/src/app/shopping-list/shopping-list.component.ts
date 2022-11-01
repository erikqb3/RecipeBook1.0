import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // ingredients: Ingredient[] = [
  //   new Ingredient('Apples',5),
  //   new Ingredient('Banana',10)
  // ];
  ingredients: Ingredient[];
  private igChangeSub: Subscription; //ingredient subscription?

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub = this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      )
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe;
  }

  // onIngredientAdded(ingredient:Ingredient){
  //   this.ingredients.push(ingredient); //ingredient is pulled from the "ingredientAdded" event
  // }
  clearAll( e ){
    this.ingredients = [];
  };
}

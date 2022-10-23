import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe; //allows recipe-item components to be used in the recipe-list component
  @Input() index: number;
  // @Output() recipeSelected = new EventEmitter<void>() //void, won't pass any info, no return


  // constructor(private recipeService: RecipeService) { }
  

  ngOnInit(): void {
  }
  // onSelected(){
  //   // this.recipeSelected.emit(); //the recipeSelected Object emits a signal that something happened
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }

}

import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef; //ViewChild, looks for local variable and creates an ElementRef variable
  @ViewChild('amountInput') amountInputRef: ElementRef;
  //ingredientAdded = new EventEmitter<{name: string, amount: number}>(); //the argument is an Object with these properties, not a value just a type definition
  @Output() ingredientAdded = new EventEmitter<Ingredient>(); //Ingredient is an object with 2 properties; a string and a number; @Output allows eventEmitter to be created when event from outside/parent event is emitted
  @Output() igredientsCleared = new EventEmitter<void>();


  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value; //when onAddItem is activated, ingName becomes the value of the designated ViewChild's nativeElement target
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    // this.slService.addIngredient(newIngredient);
    console.log(ingName, ingAmount);
    if ((ingName) && (ingAmount)){
      this.slService.addIngredient(newIngredient);
      // this.ingredientAdded.emit(newIngredient); // sending newIngredient to a higher component via emitting it after an eventemitter was activated
    }
    else {
      alert("Fill in the boxes!")
    }
    
  }

  onClearItems(){
    this.nameInputRef.nativeElement.value = ""; //erase input values
    this.amountInputRef.nativeElement.value = "";
    // this.igredientsCleared.emit(); //erase list
  }
}

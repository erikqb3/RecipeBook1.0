import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput') nameInputRef: ElementRef; //ViewChild, looks for local variable and creates an ElementRef variable
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  //ingredientAdded = new EventEmitter<{name: string, amount: number}>(); //the argument is an Object with these properties, not a value just a type definition
  @Output() ingredientAdded = new EventEmitter<Ingredient>(); //Ingredient is an object with 2 properties; a string and a number; @Output allows eventEmitter to be created when event from outside/parent event is emitted
  @Output() igredientsCleared = new EventEmitter<void>();

  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.slService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm){
    // const ingName = this.nameInputRef.nativeElement.value; //when onAddItem is activated, ingName becomes the value of the designated ViewChild's nativeElement target
    // const ingAmount = this.amountInputRef.nativeElement.value;
    const value = form.value;
    // const newIngredient = new Ingredient(ingName, ingAmount);
    const newIngredient = new Ingredient(value.name, value.amount);
    // this.slService.addIngredient(newIngredient);
    console.log(value.name, value.amount);
    if ((value.name) && (value.amount)){
      // this.slService.addIngredient(newIngredient);
      // this.ingredientAdded.emit(newIngredient); // sending newIngredient to a higher component via emitting it after an eventemitter was activated
      if (this.editMode) {
        this.slService.updateIngredient(this.editedItemIndex, newIngredient);
      }
      else {
        this.slService.addIngredient(newIngredient);
      }
    }
    else {
      alert("Fill in the boxes!")
    }
    this.editMode = false;
    form.reset();
  }

  onClearItems(){
    // this.nameInputRef.nativeElement.value = ""; //erase input values
    // this.amountInputRef.nativeElement.value = "";
    // this.igredientsCleared.emit(); //erase list
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete(){
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClearItems();

  }
}

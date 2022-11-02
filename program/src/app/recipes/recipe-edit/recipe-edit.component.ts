import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
// import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) { }

  get controls(){
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  ngOnInit(): void {
    this.route.params 
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null; //returns true if params[id] is not null
          this.initForm();
          console.log(this.editMode);
        }
      )
  }

  private initForm() {
    let recipeName = "";
    let recipeImagePath = "";
    let recipeDescription = "";
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      console.log("start");
      if (recipe['ingredients']){ //check to see if there are ingredients attached to recipe
        for (let ingr of recipe.ingredients){
          console.log("ingredient");
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingr.name, Validators.required),
              'amount': new FormControl(ingr.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0+9]*$/)
              ])
            })
          )
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
    
 
  }
  
  public onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push( //<FormArray> cast the following as a variable in the type of a Form Array, puttting it all in () makes it a form Array
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null,[
          Validators.required,
          Validators.pattern(/^[1-9]+[0+9]*$/)
        ])
      })
    ) 
  }
  public onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  public onDeleteIngredient(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
  public onSubmit(){
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']
    // )
    if (this.editMode){
      this.recipeService.updateRecipe(this.id, this.recipeForm.value); //you can comment out the above since the page is in a reactive setup and all the values are named the way of the model
    }
    else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel(); //used to navigate out of edit/add
  }
}

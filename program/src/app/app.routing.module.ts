import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";


const appRoutes: Routes = [
  { path: '', redirectTo: "/recipes", pathMatch:'full'}, //pathMatch: 'full', redirect only when the full path is empty as wanted
  { path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent}, //all child routes always come after the path fo the parent route
    {path: ':id', component: RecipeDetailComponent}

  ]},
  { path: 'shopping-list', component: ShoppingListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)], //makes appRoutes the root of routes for the app
  exports: [RouterModule]
})
export class AppRoutingModule {}
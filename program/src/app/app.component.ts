import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'program';
  loadedFeature = "recipe" //initial default
  onNavigate(feature:string){
    this.loadedFeature = feature;
  }
}

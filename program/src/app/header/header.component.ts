import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: "./header.component.html",
  styleUrls: [
    "./header.component.css"
  ]

})
export class HeaderComponent{
  collapsed = true;
  // @Output() featureSelected = new EventEmitter<string>(); //@output enables this propertyy to make it listenable from parent component (the app.component) onNavigate from app.component is activated 
  // onSelect(feature: string){
  // //   this.featureSelected.emit(feature);
  // }
}
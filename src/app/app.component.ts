import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recepie-Shopping-App';

  selection: string;

  onNavigate(feature : string){

this.selection = feature;
  }
}

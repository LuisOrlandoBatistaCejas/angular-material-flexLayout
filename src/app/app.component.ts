import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-flexLayout';
  messages = [];
  constructor() {
    this.messages = [
      {from: 'Destino 1', subject: 'subjet1', content: 'Este es el contenido q debe ser mas largo'},
      {from: 'Destino 2', subject: 'subjet2', content: 'Este es el contenido q debe ser mas largo'},
      {from: 'Destino 3', subject: 'subjet3', content: 'Este es el contenido q debe ser mas largo'},
      {from: 'Destino 4', subject: 'subjet4', content: 'Este es el contenido q debe ser mas largo'}
    ];
  }
}

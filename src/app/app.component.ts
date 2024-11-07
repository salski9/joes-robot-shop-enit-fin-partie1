import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `
    <app-site-header></app-site-header>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']

})
export class AppComponent {

}

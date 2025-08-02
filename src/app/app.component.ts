import {  Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterOutlet,
  ],
  template: `
    <app-header></app-header>
    <router-outlet/>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.less'],
})
export class AppComponent {

}

import { Component } from '@angular/core';
import { ApplicationConfig } from '@angular/core';
import {provideRouter, RouterLink} from '@angular/router';
import { NgModule } from '@angular/core';

import { routes } from '../app.routes';
import {NgOptimizedImage} from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // ...
  ]
};

@Component({
  selector: 'app-header',
  imports: [
    RouterLink, NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent {

}

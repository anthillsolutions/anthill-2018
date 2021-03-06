import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: HomeComponent, pathMatch: 'full'}
    ])
  ]
})
export class HomeModule { }

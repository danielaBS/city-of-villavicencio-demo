import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { PatternsComponent } from './patterns/patterns.component';

const routes: Routes = [  
  {
    path: '',
    component: PatternsComponent,
    children: [
      {
        path: '', loadChildren: () => import('./patterns/patterns.module').then(m => m.PatternsModule)
      }
    ]
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      paramsInheritanceStrategy: 'always'
  })],  exports: [RouterModule]
})
export class AppRoutingModule { }

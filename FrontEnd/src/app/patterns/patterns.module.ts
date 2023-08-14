import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PatternsRoutes } from './patterns-routing.module';

//imports atomic components and modules
import { AtomsComponent } from './00-atoms/atoms.component';

import { PagesModule } from './04-pages/pages.module';

@NgModule({
  declarations: [  
    AtomsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PatternsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,  
    PagesModule,
  ],
  exports: [
    RouterModule,   
    AtomsComponent,  
  ],
  entryComponents: [  
    AtomsComponent,   
  ]

})
export class PatternsModule { }

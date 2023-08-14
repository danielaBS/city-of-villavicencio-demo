import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import atomic modules

import { AtomsModule } from '../00-atoms/atoms.module';

//imports atomic components

import { ContactosCard, PicoyplacaCard, SectionHeader } from './molecules.component';
import { LabelBlock } from './molecules.component';
import { ImageLink } from './molecules.component';
import { NavbarList } from './molecules.component';
import { ListComponent } from './molecules.component';
import { NewsCard } from './molecules.component';
import { AccesibilityComponent } from './accesibility/accesibility.component';
import { InputSearchComponent } from './molecules.component';
//imports atomic components

@NgModule({
  declarations: [  
    SectionHeader,
    LabelBlock,
    NavbarList,
    ListComponent,
    ImageLink,    
    NewsCard,
    AccesibilityComponent,
    PicoyplacaCard,
    ContactosCard,
    InputSearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AtomsModule,
  ],
  exports: [
    SectionHeader,
    LabelBlock,
    NavbarList,
    ListComponent,
    ImageLink,
    NewsCard,
    AccesibilityComponent,
    PicoyplacaCard,
    ContactosCard,
    InputSearchComponent,
  ],
  entryComponents: [
    SectionHeader,
    LabelBlock,
    NavbarList,
    ListComponent,
    ImageLink,
    NewsCard,
    ContactosCard,
    AccesibilityComponent,
    PicoyplacaCard,
    InputSearchComponent,
  ]

})
export class MoleculesModule { }

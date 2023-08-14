import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Imports for angular material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

//Imports for atomic components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarruselImgsComponent } from './carrusel-imgs/carrusel-imgs.component';
import { CarruselIconosComponent } from './carrusel-iconos/carrusel-iconos.component';
import { AccordionPaginatorComponent } from './accordion-paginator/accordion-paginator.component';
import { FormComponent } from './form/form.component';
import { DataTableComponent } from './data-table/data-table.component';
import { PanelDataComponent } from './panel-data/panel-data.component';
//Imports for modules
import { AtomsModule } from '../00-atoms/atoms.module';
import { MoleculesModule } from '../01-molecules/molecules.module';
import { DataPublicacionesComponent } from './data-publicaciones/data-publicaciones.component';

@NgModule({
  declarations: [  
    HeaderComponent,
    FooterComponent,  
    NewsComponent,
    SidebarComponent,
    CarruselImgsComponent,
    CarruselIconosComponent,
    AccordionPaginatorComponent,
    FormComponent,
    DataTableComponent,
    PanelDataComponent,
    DataPublicacionesComponent,
  ],
  imports: [   
    CommonModule,
    NgbModule,
    AtomsModule,
    MoleculesModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatTabsModule,    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    SidebarComponent,
    CarruselImgsComponent,
    CarruselIconosComponent,
    AccordionPaginatorComponent,
    FormComponent,  
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatTabsModule,
    DataTableComponent,
    PanelDataComponent,
    DataPublicacionesComponent
  ],
  entryComponents: [
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    SidebarComponent,
    CarruselImgsComponent,
    CarruselIconosComponent,
    AccordionPaginatorComponent,
    FormComponent,
    DataTableComponent,
    PanelDataComponent,
    DataPublicacionesComponent,
  ]
})
export class OrganismsModule { }

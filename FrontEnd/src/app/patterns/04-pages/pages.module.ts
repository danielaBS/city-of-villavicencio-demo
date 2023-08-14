import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//imports atomic components

import { HomeComponent } from './home/home.component';
import { TramitesComponent } from './tramites/tramites.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InstitucionalComponent } from './institucional/institucional.component';
import { PicoyplacaComponent } from './picoyplaca/picoyplaca.component';
import { TarifasComponent } from './tarifas/tarifas.component';
import { NormatividadComponent } from './normatividad/normatividad.component';
import { OrganismsModule } from '../02-organisms/organisms.module';

import { AtomsModule } from '../00-atoms/atoms.module';
import { MoleculesModule } from '../01-molecules/molecules.module';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';


@NgModule({
  declarations: [  
    HomeComponent,
    TramitesComponent,  
    ContactoComponent,
    InstitucionalComponent,
    PicoyplacaComponent,
    PublicacionesComponent,
    TarifasComponent,
    NormatividadComponent,
  ],
  imports: [   
    CommonModule,
    AtomsModule,
    OrganismsModule,
    MoleculesModule,
  ],
  exports: [
    HomeComponent,
    TramitesComponent,  
    ContactoComponent,
    InstitucionalComponent,
    PicoyplacaComponent,
    PublicacionesComponent,
    TarifasComponent,
    NormatividadComponent,
  ],
  entryComponents: [
    HomeComponent,
    TramitesComponent,  
    ContactoComponent,
    InstitucionalComponent,
    PicoyplacaComponent,
    PublicacionesComponent,
    TarifasComponent,
    NormatividadComponent,
  ]
})
export class PagesModule { }

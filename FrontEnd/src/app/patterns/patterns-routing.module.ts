
import { Routes } from '@angular/router';

import { HomeComponent } from './04-pages/home/home.component';
import { ContactoComponent } from './04-pages/contacto/contacto.component';
import { TramitesComponent } from './04-pages/tramites/tramites.component';
import { InstitucionalComponent } from './04-pages/institucional/institucional.component';
import { NormatividadComponent } from './04-pages/normatividad/normatividad.component';
import { PicoyplacaComponent } from './04-pages/picoyplaca/picoyplaca.component';
import { PublicacionesComponent} from './04-pages/publicaciones/publicaciones.component';
import { TarifasComponent } from './04-pages/tarifas/tarifas.component';

export const PatternsRoutes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'tramites', component: TramitesComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'institucional', component: InstitucionalComponent},
  {path: 'picoyplaca', component: PicoyplacaComponent},
  {path: 'publicaciones', component: PublicacionesComponent},
  {path: 'tarifas', component: TarifasComponent},
  {path: 'normatividad', component: NormatividadComponent},
];


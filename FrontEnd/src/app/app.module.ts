import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatternsComponent } from './patterns/patterns.component';

import { AtomsModule } from './patterns/00-atoms/atoms.module';
import { OrganismsModule } from './patterns/02-organisms/organisms.module';
import { MoleculesModule } from './patterns/01-molecules/molecules.module';

import { MockServices } from './Services/Mock-data/mock.service';
import { ResizeService } from './Services/Resize-service/resize.service';
import { ChangeDataService } from './Services/ChangeData/changeData.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PatternsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
    AtomsModule,
    OrganismsModule,
    MoleculesModule,
    OrganismsModule
  ],
  providers: [MockServices, ResizeService, ChangeDataService],
  bootstrap: [AppComponent],
})
export class AppModule {
  
 }


import { Component, QueryList, ViewChildren } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';


@Component({
  selector: 'app-institucional',
  templateUrl: './institucional.component.html',
  styleUrls: ['./institucional.component.css']
})
export class InstitucionalComponent {

  BanerFirstTab = {title: "Sede Paraíso", class1:"white-bold", title2: "Dirección: Secretaría de Movilidad", class2:"negrilla white", dataTitle2: "", additionalTittle: "Horarios de atención: 8:00 a.m.-5:00 p.m.", additionalData: ""}
  
  InfoFirstTab= {title: "Sede de atención al cliente", class1:"blue-bold-font", title2:"Dirección: Secretaría de Movilidad", class2:"black", dataTitle2: "", additionalTittle: "Horarios de atención: 8:00 a.m.-5:00 p.m. Lunes a Viernes", additionalData: ""}
  
  imgFirstTab = { src:"https://via.placeholder.com/350", target:"_blank", targetURL:"", altT:"Logo", heightInput:"320", widthInput:"350"}

//Second Tab
  BanerSecondTab = {title: "Sede Viva", class1:"white-bold", title2: "Dirección: Secretaria de Movilidad", class2:"negrilla white", dataTitle2: "", additionalTittle: "Horarios de atención: 8:00 a.m.-5:00 p.m.", additionalData: ""}
  
  InfoSecondTab= {title: "Sede de atención al cliente", class1:"blue-bold-font", title2: "Dirección: Secretaría de Movilidad ", class2:"black", dataTitle2: "", additionalTittle: "Horarios de atención: 8:00 a.m.-5:00 p.m. Lunes a Viernes", additionalData: ""}
      
  imgSecondTab = { src:"https://via.placeholder.com/350", target:"_blank", targetURL:"", altT:"Logo", heightInput:"320", widthInput:"350"}

  navbarOpen = false;
   
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}

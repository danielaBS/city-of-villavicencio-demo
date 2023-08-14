import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {

  navbarOpen = false;
  
  imgInfoV = {class:"img",
    src : "../../../../assets/images/Btn_Alcaldia.png", target:"_self", targetURL:"", altT:"Logo", heightInput:"", widthInput:"160px"
  }

  imgInfoS = {
    src:"../../../../assets/images/LogoVillavo.png", target:"_self", targetURL:"", altT:"Logo", heightInput:"", widthInput:"150px", class:""
  }
  links = [
    ["/institucional", "Institucional"],
    ["/tramites", "Trámites"],
    ["/normatividad", "Normatividad"],
    ["/publicaciones", "Publicaciones"],
    ["/tarifas", "Tarifas"],
    ["/picoyplaca", "Pico y Placa"],
    ["/contacto", "Contáctenos"],
]
   
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}



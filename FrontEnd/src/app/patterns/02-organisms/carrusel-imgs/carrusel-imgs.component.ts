import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel-imgs',
  templateUrl: './carrusel-imgs.component.html',
  styleUrls: ['./carrusel-imgs.component.css']
})
 export class CarruselImgsComponent {
 
  images= [1, 2, 3].map((n) => `../../../../assets/images/img/imagen${n}.jpeg`);

}

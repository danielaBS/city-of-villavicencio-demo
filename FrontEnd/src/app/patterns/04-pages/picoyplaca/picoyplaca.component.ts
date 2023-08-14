import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picoyplaca',
  templateUrl: './picoyplaca.component.html',
  styleUrls: ['./picoyplaca.component.css']
})
export class PicoyplacaComponent {

  dataHeader = {classTitle: "blue negrilla", title: "Pico y Placa", classSubtitle: "small", subtitle: "Entérate de lo que está pasando en la secretaría de movilidad"}
  
  cardsPicoyplaca = [
    {line:"v-line", title1: "Taxis",src:"../../../../assets/images/img/imagen4.jpeg", altT:"Card image cap", heightInput:"", widthInput:"", class:"card-img-top"},
    { line:"",title1: "Particulares",class1:"blue-bold-font", src:"../../../../assets/images/img/imagen5.jpeg", altT:"Card image cap", heightInput:"", widthInput:"", class:"card-img-top"},
  ]

}

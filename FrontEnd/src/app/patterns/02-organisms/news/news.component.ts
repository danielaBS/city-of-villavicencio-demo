import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent  {

  dataHeader = {classTitle: "blue", title: "Noticias de interés", classSubtitle: "small", subtitle: "Entérate de lo que está pasando en la secretaría de movilidad"}
  cardsData = [
    {href:"/", src:"https://via.placeholder.com/350", altT:"Card image cap", heightInput:"", widthInput:"", class:"card-img-top", date: "22/03/2022", title: "Modernizarán los semáforos", text: "La Alcaldía de Villavicencio presentó ante el concejo una adición presupuestal para mejorar la movilidad, iniciando por la modernización de los dispositivos semafóricos del municipio que mejorará la red de comunicación vehicular..."},
    {href:"/", src:"https://via.placeholder.com/350", altT:"Card image cap", heightInput:"", widthInput:"", class:"card-img-top", date: "22/03/2022", title: "Modernizarán los semáforos", text: "La Alcaldía de Villavicencio presentó ante el concejo una adición presupuestal para mejorar la movilidad, iniciando por la modernización de los dispositivos semafóricos del municipio que mejorará la red de comunicación vehicular..."},
    {href:"/", src:"https://via.placeholder.com/350", altT:"Card image cap", heightInput:"", widthInput:"", class:"card-img-top", date: "22/03/2022", title: "Modernizarán los semáforos", text: "La Alcaldía de Villavicencio presentó ante el concejo una adición presupuestal para mejorar la movilidad, iniciando por la modernización de los dispositivos semafóricos del municipio que mejorará la red de comunicación vehicular..."},
    {href:"/", src:"https://via.placeholder.com/350", altT:"Card image cap", heightInput:"", widthInput:"", class:"card-img-top", date: "22/03/2022", title: "Modernizarán los semáforos", text: "La Alcaldía de Villavicencio presentó ante el concejo una adición presupuestal para mejorar la movilidad, iniciando por la modernización de los dispositivos semafóricos del municipio que mejorará la red de comunicación vehicular..."},
  ]
  partners = [
    {src:"../../../../assets/images/Bt_Ministerio.png", target: "_blank", targetURL:"", altT:"minTransporte", heightInput:"", widthInput:"130px", class:""},
    {src:"../../../../assets/images/Btn_Alcaldia.png", target: "_blank", targetURL:"", altT:"villavo", heightInput:"", widthInput:"130px", class:""},
    {src:"../../../../assets/images/Bt_Simit.png", target: "_blank", targetURL:"", altT:"simit", heightInput:"", widthInput:"130px", class:""},
    {src:"../../../../assets/images/Bt_RUNT.png", target: "_blank", targetURL:"", altT:"Runt", heightInput:"", widthInput:"130px", class:""},
    {src:"../../../../assets/images/Btn_GobiernoEnLinea.png", target: "_blank", targetURL:"", altT:"GOVenLinea", heightInput:"", widthInput:"130px", class:""},
  ]

}

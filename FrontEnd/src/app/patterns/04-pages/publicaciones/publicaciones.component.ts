import { Component, OnInit } from '@angular/core';
import { ChangeDataService } from 'src/app/Services/ChangeData/changeData.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent {
  newData: any[] = [];
  index = 0;
  tittle= "";


  constructor(    
    private changeDataService: ChangeDataService
    ) { 
    this.newData= this.dataArrays[0];
    this.changeDataService.onChangedIndex$
      .pipe(delay(0))
      .subscribe(x => {
        this.newData= this.dataArrays[x];
        this.index = x;
      });
  }

  obj= [
    {class: 'list-detail', itemClass:'bullets'},
    {class: 'list-detail', itemClass:'bullets'},
    {class: 'list-detail', itemClass:'bullets'},
    {class: 'list-detail', itemClass:'bullets'},
    {class: 'list-detail', itemClass:'bullets'},
    {class: 'list-detail', itemClass:'bullets'},
    {class: 'list-detail', itemClass:'bullets'}
  ]

  sidebarLinks= [
    {id:"0", decorator: false, icon:"fas fa-file-alt fa-lg", tittle:"Notificaciones" },
    {id:"1", decorator: false, icon:"fas fa-id-card fa-lg", tittle:"Notificacion Por Aviso" },
    {id:"2", decorator: false, icon:"fas fa-calendar-minus fa-lg", tittle:"Notificacion Electrónica" },
  ]

  dataArrays: any[] =  [
    [ 
    [
      "Detección Electrónica de infractores",
      "De conformidad con lo preceptuado en el artículo 8° de la Ley 1843 de 2017",
      "",
      "",
    ],  
    [
      "Notificación Personal- CNP 00659",
      "Notificación Personal- CNP 0550659"
    ],
    [
      " ",
      "Si usted se encuentra relacionado en el listado anterior, podrá acercarse a nuestras ventanillas para Detección Electrónica",
    ],
  ],
  [
    [
      "Citación para Notificación por Aviso - Detección Electrónica",
      "La Secretaria de Movilidad de Villavicencio, ahondando en garantías en el procedimiento contravencional apoyado en ayudas técnicas y tecnológicas.",
      "",
      "",
    ],  
    [
      "Notificación Personal- CNP 00659",
      "Notificación Personal- CNP 030659",
      
    ],
  ],
  [
    [
      "Citación para Notificación por Aviso - Detección Electrónica",
      "La Secretaria de Movilidad de Villavicencio, ahondando en garantías en el procedimiento contravencional apoyado en ayudas técnicas y tecnológicas.",
      "",
      "",
    ],  
    [
    ], 
  ]
 ]  
}
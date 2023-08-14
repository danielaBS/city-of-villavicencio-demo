import { Component } from '@angular/core';
import { ChangeDataService } from 'src/app/Services/ChangeData/changeData.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-normatividad',
  templateUrl: './normatividad.component.html',
  styleUrls: ['./normatividad.component.css']
})
export class NormatividadComponent {
  newData: any[] = [];
  index = 0;

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
    {id:"0", decorator: false, icon:"fas fa-file-alt fa-lg", tittle:"Actos Administrativos" },
    {id:"1", decorator: false, icon:"fas fa-car fa-lg", tittle:"Resoluciones" },
    {id:"2", decorator: false, icon:"fas fa-user fa-lg", tittle:"Decretos" },
    {id:"3", decorator: false, icon:"fas fa-shield-alt fa-lg", tittle:"Leyes" },
    {id:"4", decorator: false, icon:"fas fa-shield-alt fa-lg", tittle:"Círculares" }
  ]

  dataArrays: any[] =  [
    [ 
    [
      "Informativos",
      "Resolución 710 de 2021",
      "Por medio de  de la cual  se derogan... ",
    ],  
    [
      "Cancelación de matriculas",
      "Resolución 710 de 2021",
      "Por medio de  de la cual  se derogan... ",
      "Resolución 710 de 2021",
      "Por medio de  de la cual  se derogan... ",
    ], 
    [
      "Traspaso a favor del interesado",
      "Resolución 710 de 2021",
      "Por medio de  de la cual  se derogan... ",
      "Resolución 710 de 2021",
      "Por medio de  de la cual  se derogan... ",
    ]      
   ],
   [
    [
      "Cancelación de matriculas",
      "Resolución 710 de 2021",
      "Por medio de  de la cual  se derogan... ",
      "Resolución 710 de 2021",
      "Por medio de  de la cual  se derogan... ",
    ], 
    [
      "Traspaso a favor del interesado",
      "Resolución 710 de 2021",
      "Por medio de  de la cual  se derogan... ",      
    ]  
  ], 
  [
    [
      "Traspaso a favor del interesado",
      "Resolución 710 de 2021",
      "Por medio de  de la cual  se derogan... ",      
    ], 
    [
      "Cancelación de matriculas",
      "Resolución 710 de 2021",
      "Por medio de  de la cual  se derogan... ",
      "Resolución 710 de 2021",
      "Por medio de  de la cual  se derogan... ",
    ]    
  ],
  [ 
    [
      "Cancelación de matriculas",
      "Resolución 710 de 2021",
      "Por medio de  de la cual  se derogan... ",
      "Resolución 710 de 2021",
      "Por medio de  de la cual  se derogan... ",
    ]   
  ]
 ]  

}
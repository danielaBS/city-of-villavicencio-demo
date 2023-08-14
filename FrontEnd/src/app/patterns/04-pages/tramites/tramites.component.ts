import { Component } from '@angular/core';
import { ChangeDataService } from 'src/app/Services/ChangeData/changeData.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.component.html',
  styleUrls: ['./tramites.component.css']
})

export class TramitesComponent {
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
    {id:"0", decorator:true, icon:"fas fa-file-alt fa-lg", tittle:"Formatos" },
    {id:"1", decorator:false, icon:"fas fa-car fa-lg", tittle:"Automotores" },
    {id:"2", decorator:false, icon:"fas fa-user fa-lg", tittle:"Conductores" },
    {id:"3", decorator:false, icon:"fas fa-shield-alt fa-lg", tittle:"Infractores" }
  ]

  dataArrays: any[] =  [
    [ 
    [
      "Matricula Inicial",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
    ],  
    [
      "Traspaso de Propiedad",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",

    ], 
    [
      "Inscripción o Levantamiento de Prenda",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
    ], 
    [
      "Traslado de Cuenta",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
    ],  
    [
      "Radicado de Cuenta",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
    ],  
    [
      "Cancelación de Matricula",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
    ],  
    [
      "Cambio de Carrocería",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
    ]     
   ],
   [
    [
      "Matricula Inicial",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
    ],  
    [
      "Traspaso de Propiedad",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
    ], 
    [
      "Radicado de Cuenta",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
    ], 
    [
      "Traslado de Cuenta",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
    ]    
  ], 
  [
    [
      "Matricula Inicial",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
    ],   
    [
      "Traslado de Cuenta",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
    ]    
  ],
  [ 
    [
      "Traslado de Cuenta",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
      "El propietario del vehículo se debe encontrar previamente inscrito como persona natural o jurídica ante el RUNT.",
    ]    
  ]
 ]  
}

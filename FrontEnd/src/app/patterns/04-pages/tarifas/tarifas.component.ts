import { Component } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { MockServices } from 'src/app/Services/Mock-data/mock.service';
import { ChangeDataService } from 'src/app/Services/ChangeData/changeData.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.css']
})

export class TarifasComponent {
  index = 0;
 
  //Headers Table
  pruebaHeaders: any[] = ['tarifa', 'valor'];
  subtitle="Consulta aqui toda la información acerca del costo para cada uno de muestros trámites"
  dataTarifa2: any[]= [
    [
      ["Matricula Inicial Moto /Motocarro","$206.100"],
      ["Matricula Inicial carro","$206.100"],
      ["Matricula Inicial carro /Moto+prenda","$206.100"],
      ["cambio de carroseria /Carro-Moto","$206.100"],
      ["Cambio de color /Motocarro","$206.100"],
      
 
      ["Matricula Inicial Moto /Motocarro","$306.100"],
      ["Matricula Inicial carro","$306.100"],
      ["Matricula Inicial carro /Moto+prenda","$306.100"],
      ["cambio de carroseria /Carro-Moto","$306.100"],
      ["Cambio de color /Motocarro","$306.100"],


      ["Matricula Inicial Moto /Motocarro","$406.100"],
      ["Matricula Inicial Moto /Motocarro","$406.100"],
      ["Matricula Inicial Moto /Motocarro","$406.100"],
      ["Matricula Inicial Moto /Motocarro","$406.100"],
      ["Matricula Inicial Moto /Motocarro","$406.100"], 
      ["HOLA","$406.100"], 

    ],

    [
      ["Matricula Inicial Moto2 /Motocarro","$206.100"],
      ["Matricula Inicial carro2","$206.100"],
      ["Matricula Inicial carro /Moto+prenda","$206.100"],
      ["cambio de carroseria /Carro-Moto","$206.100"],
    
      
 
      ["Matricula Inicial Moto /Motocarro","$306.100"],
      ["Matricula Inicial carro","$306.100"],
      ["Matricula Inicial carro /Moto+prenda","$306.100"],
      ["cambio de carroseria /Carro-Moto","$306.100"],
      ["Cambio de color /Motocarro","$306.100"],


      ["Matricula Inicial Moto /Motocarro","$406.100"],
      ["Matricula Inicial Moto /Motocarro","$406.100"],
      ["Matricula Inicial Moto /Motocarro","$406.100"],
      ["Matricula Inicial Moto /Motocarro","$406.100"],
      ["Matricula Inicial Moto /Motocarro","$406.100"], 
      ["HOLA","$406.100"], 

    ],

    [
      ["Matricula Inicial Moto /Motocarro","$206.100"],
      ["Matricula Inicial carro","$206.100"],
      ["Matricula Inicial carro /Moto+prenda","$206.100"],
      ["cambio de carroseria /Carro-Moto","$206.100"],
      ["Cambio de color /Motocarro","$206.100"],
      
 
      ["Matricula Inicial Moto /Motocarro","$306.100"],
      ["Matricula Inicial carro","$306.100"],
      ["Matricula Inicial carro /Moto+prenda","$306.100"],
      ["cambio de carroseria /Carro-Moto","$306.100"],
      ["Cambio de color /Motocarro","$306.100"],


      ["Matricula Inicial Moto /Motocarro","$406.100"],
      ["Matricula Inicial Moto /Motocarro","$406.100"],
      ["Matricula Inicial Moto /Motocarro","$406.100"],
      ["Matricula Inicial Moto /Motocarro","$406.100"],
      ["Matricula Inicial Moto /Motocarro","$406.100"], 
      ["HOLA","$406.100"], 

    ]
  ]  
  
  newData: any[] = [];

  numData : any;

  inputText = 'Buscar tarifas';
  constructor(
    private breakpointObserver: BreakpointObserver,
    private mService: MockServices,
    private changeDataService: ChangeDataService,
  ) {
    this.newData= this.dataTarifa2[0];
    this.changeDataService.onChangedIndex$
    .pipe(delay(0))
    .subscribe(x => {
      this.newData= this.dataTarifa2[x];
      this.index = x;   
    }); 

    this.changeDataService.onChangedTittle$
      .pipe(delay(0))
      .subscribe(x => {         
        this.links[1] = 
           x           
      });
   }

   showFiller = false;
   sidebarLinks= [
    // {id:"1", icon:"fas fa-file-alt fa-lg", tittle:"Tarifas" },
    {id:"0", decorator:false, icon:"fas fa-car fa-lg", tittle:"Automotores" },
    {id:"1", decorator:false, icon:"fas fa-user fa-lg", tittle:"Conductores" },
    {id:"2", decorator:false, icon:"fas fa-shield-alt fa-lg", tittle:"Infractores" }
  ]

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    changeData(e: Event){
      var target = (e.currentTarget as Element).id ;
    }

  links = [ "Tarifas ", "Automotores"]

  onResult(data:any) {
    this.newData = data;
  }

  // @Input() data: any[]= [];
  // pager: any = {}; // pager objeto
  // pagedItems: any[] = [];  // paged items

  // ngOnChanges(changes: SimpleChanges) {
  //   if (this.data) {
  //     this.setPage(1);
  //   }
  // }

  // setPage(page: number) {        
  //   // obtener el objeto pager desde el servicio
  //   this.pager = this.pagerService.getPager(this.data.length, page, 10);

  //   // obtener la página de items actual
  //   this.pagedItems = this.data.slice(this.pager.startIndex, this.pager.endIndex + 1);
  // }
}

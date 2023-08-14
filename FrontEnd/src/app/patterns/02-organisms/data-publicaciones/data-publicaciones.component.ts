import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { PagerService } from 'src/app/Services/Pager/pager.service';
import { ChangeDataService } from 'src/app/Services/ChangeData/changeData.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-data-publicaciones',
  templateUrl: './data-publicaciones.component.html',
  styleUrls: ['./data-publicaciones.component.css']
})
export class DataPublicacionesComponent {
  @Input() data: any[]= [];
  @Input() obj: any[]= [];

  @Output() result = new EventEmitter<boolean>();
  panelOpenState = false;
  newData: any[] = [];
  pager: any = {}; // pager objeto
  pagedItems: any[] = [];  // paged items
  inputText = 'Buscar publicación';
  
  links = [
   "Publicaciones",
    "Notificaciones"
  ]
  subtitle ="A coninuación, encontrará los distintos notificaciones realizadas conforme con la normatividad"

  constructor(
    private pagerService: PagerService,
    private changeDataService: ChangeDataService
    ) {
      this.changeDataService.onChangedTittle$
      .pipe(delay(0))
      .subscribe(x => {        
        this.links[1] = 
           x           
      });
     }

  // En cuanto haya cambios actualizar a la primera página
  ngOnChanges(changes: SimpleChanges) {
    if (this.data) {
      this.setPage(1);
    }
  }

  setPage(page: number) {        
    // obtener el objeto pager desde el servicio
    this.pager = this.pagerService.getPager(this.data.length, page, 10);

    // obtener la página de items actual
    this.pagedItems = this.data.slice(this.pager.startIndex, this.pager.endIndex + 1);
    this.newData = this.pagedItems;
  }

  onResult(data:any) {
    this.newData = data;
  }

}


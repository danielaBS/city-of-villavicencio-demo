import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { delay } from 'rxjs/operators';
import { ChangeDataService } from 'src/app/Services/ChangeData/changeData.service';
import { PagerService } from 'src/app/Services/Pager/pager.service';

@Component({
  selector: 'app-accordion-paginator',
  templateUrl: './accordion-paginator.component.html',
  styleUrls: ['./accordion-paginator.component.css']
})
export class AccordionPaginatorComponent {
  
  @Input() data: any[]= [];
  @Input() obj: any[]= [];

  @Output() result = new EventEmitter<boolean>();
  panelOpenState = false;
  newData: any[] = [];
  pager: any = {}; // pager objeto
  pagedItems: any[] = [];  // paged items
  title = "Formatos";
  inputText = 'Buscar trámite';

  links = [
    "Trámites",
     "Formatos"
  ]
  subtitle ="A continuación encontrará los trámites y/o servicios a su disposición."
  classInput="blue"

  constructor(
    private pagerService: PagerService,
    private changeDataService: ChangeDataService
    ) { 
      
      this.changeDataService.onChangedTittle$
      .pipe(delay(0))
      .subscribe(x => {        
        this.title = x;   
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

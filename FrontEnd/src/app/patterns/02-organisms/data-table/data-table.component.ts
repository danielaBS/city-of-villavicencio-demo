import { Component, ViewChild, ElementRef, Input, Output, OnChanges, Pipe, PipeTransform, SimpleChanges, EventEmitter, ɵConsole } from '@angular/core';
import { PagerService } from 'src/app/Services/Pager/pager.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  providers: [PagerService]

})
export class DataTableComponent implements OnChanges {  
  @ViewChild('body') myDiv?: ElementRef<object>;
  @ViewChild('#data-table') table?: ElementRef<object>;


  @Input() tableHeaders: any[] = [];
  @Input() data: any[] = [];
  @Input() numData: number = 0;
  @Output() result = new EventEmitter<boolean>();

  campos ="";
  newHeaders: any[] = [];
  pager: any = {}; // pager objeto
  pagedItems: any[] =[];  // paged items
  ordenActivo = null;  // El sort que se encuentra activo en el momento
  ordenAscendente = false;
 

  constructor(    
    private pagerService: PagerService,
  )
  {}
  
  ngOnChanges(changes: SimpleChanges){
    this.ordenActivo = null;
      this.ordenAscendente = false;
      this.setPage(1);

  }
  setPage(page: number) {    
    // obtener el objeto pager desde el servicio
    this.pager = this.pagerService.getPager(this.data.length, page, 5);


    // obtener la página de items actual
    this.pagedItems = this.data.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  /**
   * @param event evento de cambio de tamaño de la pantalla
   * Método para recalcular la tabla cuando ocurra el evento de modificación de pantalla
   * @version 1.0
   */
  onResize(event: any) {
    this.calcularHeight();
  }

  calcularHeight() {
    const isHTMLElement = (target: Window | HTMLElement): target is HTMLElement =>
    (target as HTMLElement).getBoundingClientRect() !== undefined;
  }

  ordenarColumnas(header : any) {
    if (this.ordenActivo === header) {
      this.ordenAscendente = !this.ordenAscendente;
      if (this.ordenAscendente) {
        this.data = this.data.sort((a: string, b: string) => {
          return a[header] < b[header] ? 1 : -1;
        });
      } else {
        this.data = this.data.sort((a: string, b: string) => {
          return a[header] > b[header] ? 1 : -1;
        });
      }
    } else {
      this.ordenAscendente = false;
      this.ordenActivo = header;
      this.data = this.data.sort((a: string, b: string) => {
        return a[header] > b[header] ? 1 : -1;
      });

    }
    this.setPage(this.pager.currentPage);    
  }

  isNumber(value : any) {
    if (typeof(value) === 'number') {
      return true;
    }

    return false;
  }

}

// Pipe para recortar palabras 25 caracteres
@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 25, completeWords = false, ellipsis = '...') {

    if (value.length < limit) {
      return `${value.substr(0, limit)}`;
    }

    if (completeWords) {
      limit = value.substr(0, limit).lastIndexOf(' ');
    }
    return `${value.substr(0, limit)}${ellipsis}`;
  }
}


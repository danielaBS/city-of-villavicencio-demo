import { Component, OnInit, ElementRef, HostListener, Directive  } from '@angular/core';
import { ResizeService } from 'src/app/Services/Resize-service/resize.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-carrusel-iconos',
  templateUrl: './carrusel-iconos.component.html',
  styleUrls: ['./carrusel-iconos.component.css']
})


export class CarruselIconosComponent implements OnInit {
  currentSize: any;
  size: any;

  constructor(private elementRef: ElementRef, private resizeSvc: ResizeService) {
    this.resizeSvc.onResize$
      .pipe(delay(0))
      .subscribe(x => {
        this.size = x;
      });
      
   }
  init=0;
  end=6;
  limitUp=6;
  limitDown=0;
  iconos= [1,2,3,4,5,6,7].map((n) => `../../../../assets/images/iconos/${n}.svg`);
  text = ["Pagos comparendos", "Estado de cuenta", "Actualización de datos", "Estado de trámites", "Tarjeta de operación", "Impuesto vehicular", "Texto prueba"]
  href=["_blank","_blank","_blank","_blank","_blank","_blank","_blank"]
  showIcons = [{url: "", text: "", href:""}];

  async ngOnInit() {
    this.showIcons=[];
    for(var i=this.init; i<this.end;i++) {
      this.showIcons.push({url: this.iconos[i], text :this.text[i], href: this.href[i]});          
    }
  }

  nextSlide() {
    if(this.end >this.limitUp){
      this.end=this.limitUp;
      this.init=0;
    } else {
      this.end++;
      this.init++;
    }
  
    this.ngOnInit()
  }
  prevSlide() {
    if(this.init <1){
      this.init=1;
      this.end=this.limitUp+1;

    } else {
      this.init+=-1;
      this.end+=-1;
    }
    this.ngOnInit()

  }

  @HostListener("window:resize", [])
  private onResize() {
    this.detectScreenSize();
  }
  
  ngAfterViewInit() {
    this.detectScreenSize();
  }

  private detectScreenSize() {   
    this.currentSize = window.innerWidth;
    if(this.currentSize <768) {
      this.limitUp=2;
    } else if(this.currentSize>=768 && this.currentSize<1024) {
      this.limitUp=4;
    } else if(this.currentSize>=1024){
      this.limitUp=6;
    }
    this.end=this.limitUp  
    this.ngOnInit();
  }


}

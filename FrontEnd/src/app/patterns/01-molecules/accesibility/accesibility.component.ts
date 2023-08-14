import { DOCUMENT } from '@angular/common';
import { Inject, Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-accesibility',
  templateUrl: './accesibility.component.html',
  styleUrls: ['./accesibility.component.css']
})
export class AccesibilityComponent implements OnInit {
  contrastBool=true;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    var contrastOn=localStorage.getItem('contrast')
    if(contrastOn && contrastOn==="false") {
      this.renderer.addClass(this.document.body, 'contrast');
    } else if (contrastOn && contrastOn==="true"){
      this.renderer.removeClass(this.document.body, 'contrast');
    }
  }

   contrast() {

    this.contrastBool =!this.contrastBool;
    //this.document.body.classList.toggle('contrast');   
    //this.renderer.addClass(this.document.body, 'contrast');
    localStorage.removeItem('contrast')
    localStorage.setItem('contrast',this.contrastBool.toString())
    //this.document.body.classList.toggle('contrast');
    this.ngOnInit()
  }

  fontSize = 14;

  @ViewChild('para', {static: true}) para: ElementRef | undefined;

  changeFont(operator: string){

    operator === '+' ? this.fontSize++ : this.fontSize--;

    document.getElementsByTagName('body')[0].style.fontSize  = `${this.fontSize}px`;

  }

}

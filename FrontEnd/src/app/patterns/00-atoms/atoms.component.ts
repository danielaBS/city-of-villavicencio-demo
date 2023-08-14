import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-atoms',
    templateUrl: './atoms.component.html',
    styles: []
  })
  
  export class AtomsComponent implements OnInit {
  
    constructor() { }
    ngOnInit(): void {
    }
  }

@Component({
    selector: 'label-data',
    template: 
    `
      <label [class]="labelClass">{{label}}</label>
    `,
    styles: []
  })
  export class LabelData {
    @Input() label: string="";
    @Input() labelClass: string="";
  }
  
  @Component({
    selector: 'image-data',
    template: 
    `
     <img [alt]="altText" [class]="class" [src]="imgSrc" [attr.height]= "heightI" [attr.width]= "widthI"/>
    `,
    styles: []
  })
  export class ImageData {        
    @Input() imgSrc: string="";
    @Input() altText: string="";
    @Input() heightI: string="";
    @Input() widthI: string="";
    @Input() class: string="";
  }
  
  @Component({
    selector: 'link-data',
    template: 
    `
      <a [href]="targetUrl" [target]="targetType" >{{linkText}}</a>
    `,
    styles: []
  })
  export class LinkData {
    @Input() targetUrl: string="";
    @Input() targetType: string="";
    @Input() linkText: string="";
  }

  @Component({
    selector: 'button-content',
    template: 
    `
    <input [class]="buttonComp.buttClass" [type]="buttonComp.buttType" [value]="buttonComp.buttValue"/>
    `,
    styles: []
  })
  export class ButtonInfo {
    @Input() buttonComp: any ={};
  
  }

  @Component({
    selector: 'input-component',
    template: 
    `
    <input [type]="inputComp.inputType" [id]="inputComp.inputId" [class]="inputComp.inputClass" [placeholder]="inputComp.inputPHolder"  ngModel required/>
    `,
    styles: []
  })
  export class InputComponent {
    @Input() inputComp: any ={};
  
  }

  @Component({
    selector: 'textarea-component',
    template: 
    `
    <textarea [class]="textareaComp.TAClass" [rows]="textareaComp.TArows"  ngModel required></textarea>
    `,
    styles: []
  })
  export class textareaComponent {
    @Input() textareaComp: any ={};
  
  }

  @Component({
    selector: 'input-check',
    template: 
    `
    <input [class]="inputCheck.ICheckClass" [type]="inputCheck.ICheckType" [value]="inputCheck.ICheckValue" [id]="inputCheck.ICheckId"  ngModel required/>
    `,
    styles: []
  })
  export class inputCheck {
    @Input() inputCheck: any ={};
  
  }
  
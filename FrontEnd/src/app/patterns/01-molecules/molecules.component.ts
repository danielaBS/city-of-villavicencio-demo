import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-molecules',
    templateUrl: './molecules.component.html',
    styles: []
  })
  
  export class MoleculesComponent  {    

  }
   
@Component({
  selector: 'section-header',
  template: 
  `
  <div class="header">
    <h3 [class]="data.classTitle">{{data.title}}</h3>
    <p [class]="data.classSubtitle">{{data.subtitle}}</p>
  </div>
  `,
  styles: []
})

export class SectionHeader {
  @Input() data: any ={};

}
  
@Component({
  selector: 'label-block',
  template: 
  `
  <label-data [label]="info.title" [labelClass]="info.class1"></label-data><br/>
  <label-data [label]="info.title2" [labelClass]="info.class2"></label-data>
  <span> {{info.dataTitle2}}</span><br/>
  <label-data [label]="info.additionalTittle" [labelClass]="info.class2"></label-data>
  <span> {{info.additionalData}}</span>
  
  `,
  styles: []
})

export class LabelBlock {
  @Input() info: any={};

}

@Component({
  selector: 'image-link',
  template: 
  `
  <a [href]="imgInfo.targetURL" [target]="imgInfo.target">
    <image-data [class]="imgInfo.class" [imgSrc]="imgInfo.src" [altText]="imgInfo.altT" [heightI]="imgInfo.heightInput" [widthI]="imgInfo.widthInput"></image-data>
  </a>
  `,
  styles: []
})
export class ImageLink {
  @Input() imgInfo: any ={};
}
  
@Component({
  selector: 'navbar-list',
  template: 
  `
  <ul class="navbar-nav mr-auto">
    <li class="nav-item" *ngFor="let link of links">
      <link-data [targetUrl]="link[0]" [linkText]="link[1]" [targetType]="targetType"></link-data>
    </li>
  </ul>
  `,
  styles: []
})
export class NavbarList  {
  @Input() links: string[][] = [];
  @Input() targetType: string = "";
}

import { Router } from '@angular/router';

@Component({
  selector: 'list-component',
  template: 
  `
  <ul [class]="list.class">
    <li [class]="list.itemClass" *ngFor="let item of detail | slice:indexSlice ; let i= index">
      {{item}}
    </li>
  </ul>
  `,
  styles: []
})

export class ListComponent implements OnInit {
  @Input() list: any= {};
  @Input() detail = [];
  indexSlice=0;
  
  constructor(
    private router: Router,
  ) { 

  }

  ngOnInit(): void {
    if(this.router.url===("/tramites")) {
      this.indexSlice=1
    }
    
  }
}

@Component({
  selector: 'news-card',
  template: 
  `
  <div class="card-data">
    <image-data [class]="cardInfo.class" [imgSrc]="cardInfo.src" [altText]="cardInfo.altT" [heightI]="cardInfo.heightInput" [widthI]="cardInfo.widthInput"></image-data>
    <div class="card-body">
      <p class="card-date no-margin">{{cardInfo.date}}</p>
      <p class="card-title no-margin">{{cardInfo.title}}</p>
      <p class="card-text no-margin">
        {{cardInfo.text}}
      </p>
    </div>
  </div>
  `,
  styles: []
})

export class NewsCard  {
  @Input() cardInfo: any = {};
    
}

@Component({
  selector: 'picoyplaca-card',
  template: 
  `
  <div class="card-picoyplaca">
      <p class="card-title1">{{cardInfo.title1}}</p>
      <image-data [class]="cardInfo.class" [imgSrc]="cardInfo.src" [altText]="cardInfo.altT" [heightI]="cardInfo.heightInput" [widthI]="cardInfo.widthInput"></image-data>
  </div>
 
  `,
  styles: []
})

export class PicoyplacaCard  {
  @Input() cardInfo: any = {};
    
}
@Component({
  selector: 'contactos-card',
  template: 
  `
  <div class="card-contactos">
  <div class="card-body">
      <p class="card-title1">{{cardInfo.title1}}</p>
      <p class="card-text no-margin aling-center"> </p>{{cardInfo.text}}
      <p class="card-text2 no-margin aling-center"> </p>{{cardInfo.text2}}
  </div>
  `,
  styles: []
})

export class ContactosCard  {
  @Input() cardInfo: any = {};
}

@Component({
  selector: 'app-input-search',
  template: `<div class="well" >
              <div class="form-group">
                  <input [(ngModel)]="search" (ngModelChange)="searchData()" type="text" class="form-control" placeholder=" {{inputText}} ">
              </div>
            </div>`,
  styles: [`.well {
                width: 100%;
                float: right;
                padding: 0 42px;
                margin: 10% 15%;
                position: relative;
            }
            .form-group {
                margin-bottom: 0px;
            }

            @media (max-width:724px){
              .well {
                float: none;
                padding:none;
                margin: 10% -4%;
              }
            }
            `
            
          ]
})

export class InputSearchComponent {

  @Input() data: any;
  @Input() inputText: string = "";
  @Output() result = new EventEmitter<object[]>();
  search = '';
  detail: any[] =[];

  searchData() {
    const res = this.data.filter((item:any) => {
      for (const iterator of item) {
        if (iterator.toString().toLowerCase().indexOf(this.search.toLowerCase()) > -1) {
          return true;
        }
      }
      return false;
    });
    this.result.emit(res);

  }
}






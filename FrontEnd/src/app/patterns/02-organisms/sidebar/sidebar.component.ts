import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { ChangeDataService } from 'src/app/Services/ChangeData/changeData.service';

export interface DataAcordion {
  class: string;
  title: string;
  itemClass: string;
  detail: {}; 
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [        
    trigger('slideInOut', [     
      state('in', style({
        width:'25vw',
      })),
      state('out', style({
        width:'50px',
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out')),
    ]),
    trigger('slideInOutMovil', [     
      state('in', style({
        width:'55vw',
        borderRadius:'0 1rem 1rem 0'
      })),
      state('out', style({
        width:'0',
        overflow:'hidden'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out')),
    ]),
  ]
})

export class SidebarComponent {
  @Input() sidebarLinks: any[]= [];
  
  numData : any;
  newData : any =[];

  links = [
    ["/institucional", "Institucional"],
    ["/tramites", "Trámites"],
  ]

  constructor(
    private breakpointObserver: BreakpointObserver,
    private changeDataService: ChangeDataService
  ) {}

  showFiller = false;
  openBar = false;
  menuState:string = 'out';
  menuStateMovil:string = 'in';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay(),
    );

    changeData(e: Event){
      var target = (e.currentTarget as Element) ;
      this.changeDataService.onChangeIndex(target.id);
      this.changeDataService.onChangeTittle(target.getAttribute("name"))
    }

    async toggleNavbar() {
      this.openBar = !this.openBar;
    }
}

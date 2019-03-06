import { Component, OnInit, Input } from '@angular/core';
import { RouteConfigService } from "../routeConfig.service";
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss'],
  animations: [
    trigger('animals', [
      transition('* => *', [
        query(':enter', style({opacity: 0}),{optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({
              opacity:0,
              transform: 'translateY(-75%)', offset: 0
            }),
            style({
              opacity:.5,
              transform: 'translateY(35px)', offset: .3
            }),
            style({
              opacity:1,
              transform: 'translateY(0)', offset: 1
            })
          ]))]),{optional: true}),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({
              opacity:1,
              transform: 'translateY(0)', offset: 0
            }),
            style({
              opacity:.5,
              transform: 'translateY(35px)', offset: .3
            }),
            style({
              opacity:1,
              transform: 'translateY(0)', offset: 1
            })
          ]))]),{optional: true})
      ])
    ])
  ]
})
export class AnimalsComponent implements OnInit {
  animals: any;
  @Input() animalLength: number = 0;
  constructor(private _configData: RouteConfigService) {

  }

  ngOnInit() {
    this.getListOfData();
  }

  getListOfData() {
    this._configData.getConfig()
      .subscribe(resp =>  {
        this.animals = resp;
        this.animalLength = this.animals.length;
      });
  }

  removeEntry(id) {
    for(let i=0; this.animals.length>i; i++) {
      if(this.animals[i].id === id) {
        this.animals.splice(i, 1);
        this.animalLength = this.animals.length;
      } else {
        return;
      }

    }
  }

}

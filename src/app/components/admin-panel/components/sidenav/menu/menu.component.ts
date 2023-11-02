import {Component, OnInit} from '@angular/core';
import { Menulist } from "./interface/menulist";
import { menulist as menulistdata } from "./data/menudata";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menulist: Menulist[] = menulistdata;

  idVariable:string = 'calendar';
  constructor() {
  }


  ngOnInit():void {
  }
}

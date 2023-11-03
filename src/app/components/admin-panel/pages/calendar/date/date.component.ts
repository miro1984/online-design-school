import {Component} from '@angular/core';
import {DateService} from "../../../../../shared/date.service";

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent {


  constructor(public dateService: DateService) {
  }


}

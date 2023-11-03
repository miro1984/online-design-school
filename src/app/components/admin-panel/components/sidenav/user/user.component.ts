import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userName: string = 'Lily Bennett';
  userImageLink: string = './../assets/images/icons/user/user.svg';

  constructor() {
  }

  ngOnInit() {
  }
}

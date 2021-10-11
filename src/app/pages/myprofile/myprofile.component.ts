import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor(public user:UsersService) { }

  ngOnInit(): void {
  }

  Users = this.user.Users
  sugeridos = this.user.sugeridos

}

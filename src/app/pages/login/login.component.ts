import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user = {
    email: '',
    password: '',

  }

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }


  singIn(){
    this.auth.logIn(this.user)
      .subscribe(res => {
        console.log(res);
        localStorage.setItem('token', res.token)
        this.router.navigate(['/home'])
      }
      )
  }
}

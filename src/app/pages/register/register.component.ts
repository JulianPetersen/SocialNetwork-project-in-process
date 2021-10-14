import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   user={
      nombre:'',
      email:'',
      password:''
   }

  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  singUp(){
    this.auth.singUp(this.user)
      .subscribe (res => {
        console.log(res)
        this.router.navigate(['/login']);
      },
      err => console.log(err)
      )

  }

 
}

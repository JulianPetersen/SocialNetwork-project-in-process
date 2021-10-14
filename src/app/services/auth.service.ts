import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router:Router) { }

  //registro de usuario
  singUp(user:any){
   return this.http.post<any>('http://localhost:3000/api/usuarios', user)
  }
  
  //loggeo de usuario
  logIn(user:any){
    return this.http.post<any>('http://localhost:3000/api/auth',user)
  }


 //comprueba si el usuario está logueado
  loggedIn(){
    if(localStorage.getItem('token')){
      return true
    }else{
      return false
    }
  }


  getToken(){
     return localStorage.getItem('token')
  }


  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

}

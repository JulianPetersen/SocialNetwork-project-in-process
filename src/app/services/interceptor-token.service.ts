import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorTokenService implements HttpInterceptor{


  constructor(private auth: AuthService) { }


  intercept(req:any, next:any){
    
    const tokenizeReq = req.clone({
      setHeaders: {
        Autorization: this.auth.getToken()
      }
    })
    return next.handle(tokenizeReq)
  }


  
}

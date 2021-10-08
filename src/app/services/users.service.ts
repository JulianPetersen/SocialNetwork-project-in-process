import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  Users: any[] = [
    {
      id:1,
      nombre: "Julian",
      apellido: "Petersen",
      imgProfile: "https://image.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg",
      seguidores: 300,
      siguiendo: 350,
    }
  ]


  sugeridos: any[]=[
    {imgProfile:"https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg", nombre:"Lorem impsum"},
    {imgProfile:"http://www.darlingdigitalphotography.com/wp-content/uploads/2017/01/selfie-headshot-e1485719447129.jpeg", nombre:"Lorem impsum"},
    {imgProfile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6pKmfTtnadBrVzrZxPl6ZV2k4TTytr5yqGIdxWply5L48LzEZGOn6TnSFHhZPTeyZVRQ&usqp=CAU", nombre:"Lorem impsum"},
    {imgProfile:"https://image.freepik.com/foto-gratis/imagen-medio-perfil-hombre-joven-moda-aspecto-amistoso-bigote-barba-sonriendo-pensativamente-mientras-recuerda-alguna-historia-divertida-o-broma-posando-estudio-camisa-blanca-formal_343059-946.jpg", nombre:"Lorem impsum"},
    {imgProfile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClzlnUyPMc8aEbvesBBqG9mKooYPEQ-Zp5SoOs1TaFKfo-mAJ1W31S9klAc6Za7FE1XE&usqp=CAU", nombre:"Lorem impsum"},
    {imgProfile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU", nombre:"Lorem impsum"},
    {imgProfile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkueqf2PfkXtUe_p_kd7j4SBwBEtacRFDmB7O5situL9zj1QSbuV9QWOx8wDqqEDPf5g&usqp=CAU", nombre:"Lorem impsum"},
    {imgProfile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVSq9LTCYPBnJM6zLdZhgRXQabSNAA0gH9MapKOKYBMDBC_Jpk8WgN9LF8eyXsMkBvAuI&usqp=CAU", nombre:"Lorem impsum"},
  ]





}

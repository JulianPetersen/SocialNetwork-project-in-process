import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from 'src/app/services/publicaciones.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  constructor(public user:UsersService, private publicaciones:PublicacionesService) { }

  cantidadPublicacion:any [] = [1,2,3,4,5,6,7,8,9];

  usuario = this.user.Users
  Publicaciones = this.publicaciones.publicaciones;


  ngOnInit(): void {
  }

}

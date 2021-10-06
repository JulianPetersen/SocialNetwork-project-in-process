import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  constructor() { }

  cantidadPublicacion:any [] = [1,2,3,4,5,6,7,8,9];

  ngOnInit(): void {
  }

}

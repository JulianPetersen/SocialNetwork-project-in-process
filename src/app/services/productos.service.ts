import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }


  productos: any[] = [
    {
      usuario:"Julian Petersen",
      imgProducto: "https://http2.mlstatic.com/D_Q_NP_651453-MLA42136307725_062020-AB.webp",
      precio: "2500",
      descripcion:"placa de video"
    },
    {
      usuario:"Julian Petersen",
      imgProducto: "https://http2.mlstatic.com/D_Q_NP_698158-MLA46649863851_072021-AB.webp",
      precio: "21000",
      descripcion:"Celular - motorola g2"
    },
    {
      usuario:"Julian Petersen",
      imgProducto: "https://http2.mlstatic.com/D_Q_NP_649688-MLA46389409510_062021-AB.webp",
      precio: "60000",
      descripcion:"NoteBook"
    },
    {
      usuario:"Julian Petersen",
      imgProducto: "https://http2.mlstatic.com/D_Q_NP_626923-MLA47633918577_092021-AB.webp",
      precio: "30000",
      descripcion:"Tv 32 pulgadas"
    },
    {
      usuario:"Julian Petersen",
      imgProducto: "https://http2.mlstatic.com/D_Q_NP_2X_819612-MLA43461815344_092020-P.webp",
      precio: "95000",
      descripcion:"Lavarropas Automatico"
    },
    {
      usuario:"Julian Petersen",
      imgProducto: "https://http2.mlstatic.com/D_Q_NP_2X_677202-MLA40176282059_122019-P.webp",
      precio: "65000",
      descripcion:"Aire Acondicionado"
    },
    {
      usuario:"Julian Petersen",
      imgProducto: "https://http2.mlstatic.com/D_Q_NP_2X_868921-MLA43876362931_102020-P.webp",
      precio: "4000",
      descripcion:"Zapatillas Topper"
    },
    {
      usuario:"Julian Petersen",
      imgProducto: "https://http2.mlstatic.com/D_Q_NP_2X_726215-MLA47667561427_092021-P.webp",
      precio: "6000",
      descripcion:"Mini Pimer, Multiprocesadora"
    },
    {
      usuario:"Julian Petersen",
      imgProducto: "https://http2.mlstatic.com/D_Q_NP_2X_936943-MLA40616009063_012020-P.webp",
      precio: "41000",
      descripcion:"Sommier y colchon 2 plazas"
    },
  ]



}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  constructor() { }

  publicaciones:any[] = [
    {
      descrpicion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repellat maiores reprehenderit nesciunt quibusdam quisquam. Recusandae cupiditate voluptate doloremque distinctio",
      nombre: "Julian Petersen",
      tiempo: "hace una hora",
      img: "https://scontent-eze1-1.xx.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/c0.6.526.526a/p526x296/241223556_1445366385831629_5769421713842991932_n.png.jpg?_nc_cat=109&ccb=1-5&_nc_sid=de7202&_nc_ohc=7i1IIXzeft8AX9cJIsO&_nc_ht=scontent-eze1-1.xx&oh=4db52ee801caef7752a20320afb6d2df&oe=6163E520"
    },
    {
      descrpicion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repellat maiores reprehenderit nesciunt quibusdam quisquam. Recusandae cupiditate voluptate doloremque distinctio",
      nombre: "Agustin Apaolaza",
      tiempo: "hace una hora",
      img: "https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/s600x600/244041290_6466530850054120_8470592878318672814_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=b9115d&_nc_ohc=W3_hXrmTVHsAX9oXOEw&_nc_ht=scontent-eze1-1.xx&oh=ecc042e1cf71053acab4c38edea541c6&oe=61639970"
    },
    {
      descrpicion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repellat maiores reprehenderit nesciunt quibusdam quisquam. Recusandae cupiditate voluptate doloremque distinctio",
      nombre: "Melanie Melo",
      tiempo: "hace una hora",
      img: "https://scontent-eze1-1.xx.fbcdn.net/v/t1.6435-9/s600x600/244647560_6163363607069267_325621042667092544_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=b9115d&_nc_ohc=TI1bbu9RxQQAX8lO1Xn&_nc_ht=scontent-eze1-1.xx&oh=2fdea3e572b6754e2e91eb9528ee7ba9&oe=61856E53"
    },

  ]
}

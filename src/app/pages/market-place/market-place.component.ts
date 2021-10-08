import { Component, OnInit } from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {NestedTreeControl} from '@angular/cdk/tree';


interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Electonica',
    children: [
      {name: 'Celulares'},
      {name: 'Computadoras'},
      {name: 'Televeisores'},
      {name: 'Consolas'},
    ]
  }, 
  {
    name: 'Inmuebles',
    children: [
      {name: 'casas'},
      {name: 'Alquileres'},
      {name: 'Deptos'},
    ]
      
    
  },
  {
    name: 'Vehículos',
    children: [
      {name: 'Autos'},
      {name: 'Camionetas'},
      {name: 'Motos'},
      {name: 'Camiones'},
    ]
      
    
  },
  {
    name: 'Hogar',
    children: [
      {name: ''},
    ]
  },
  {
    name: 'Construcción',
    children: [
      {name: ''},
    ]
  },
  {
    name: 'Juguetes',
    children: [
      {name: ''},
    ]
  },
  {
    name: 'Bebes',
    children: [
      {name: ''},
    ]
  },
  {
    name: 'Salud y belleza',
    children: [
      {name: ''},
    ]
  }
];



@Component({
  selector: 'app-market-place',
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.css']
})
export class MarketPlaceComponent implements OnInit {

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  productos:any[]=[1,2,3,4,5,6,7,8,9,10];


  constructor() {
    this.dataSource.data = TREE_DATA;
   }
   

  ngOnInit(): void {
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}


import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ProductDialogComponent } from 'src/app/components/product-dialog/product-dialog.component'
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(public Productos:ProductosService,public dialog: MatDialog) { }
  productos = this.Productos.productos;
  ngOnInit(): void {
  }



  openDialog() {
    this.dialog.open(ProductDialogComponent);
  }
}



import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../../services/productos-service';
import { CarritoService } from '../../../services/carrito-service';
import { Producto } from '../models/pedido-model';

@Component({
  selector: 'app-cafeteria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cafeteria.html',
  styleUrl: './cafeteria.css',
})

export class Cafeteria implements OnInit{
  productos: Producto[] = [];

  constructor(
    private productosService: ProductosService,
    private carritoService: CarritoService
  ) {}

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productos = this.productosService.obtenerProductos();
  }

  agregarAlCarrito(producto: Producto) {
    this.carritoService.agregarProducto(producto);
    
    
    this.mostrarFeedback(producto.nombre);
  }

  mostrarFeedback(nombreProducto: string) {
    
    alert(`${nombreProducto} agregado al carrito!`);
    
    
    console.log(`Producto "${nombreProducto}" agregado al carrito`);
  }
}

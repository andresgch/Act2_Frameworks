import { Injectable } from '@angular/core';
import { Producto } from '../src/app/models/pedido-model';

@Injectable({
  providedIn: 'root',
})

export class CarritoService {
  productos: Producto[] = [];
  total: number = 0;

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
    this.calcularTotal();
    console.log('Producto agregado:', producto);
    console.log('Carrito actual:', this.productos);
  }

  eliminarProducto(index: number) {
    this.productos.splice(index, 1);
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.productos.reduce((sum, producto) => sum + producto.precio, 0);
  }

  limpiarCarrito() {
    this.productos = [];
    this.total = 0;
  }

  obtenerCantidadProductos(): number {
    return this.productos.length;
  }

  
}

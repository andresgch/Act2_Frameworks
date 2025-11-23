import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'
import { CarritoService } from '../../../services/carrito-service';
import { Producto } from '../models/pedido-model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit{
  @Input() visible: boolean = false;

  @Output() cerrarCarrito = new EventEmitter<void>();

   constructor(
    private router: Router,
    public carritoService: CarritoService
  ) {}

   ngOnInit() {
   
  }

    onCerrarClick() {
    this.cerrarCarrito.emit();
  }

  irAlCheckout() {
    this.cerrarCarrito.emit();
    this.router.navigate(['/checkout']);
  }

  // Método para eliminar producto del carrito
  eliminarProducto(index: number) {
    this.carritoService.eliminarProducto(index);
  }

  // Obtener total del carrito
  getTotal(): number {
    return this.carritoService.total;
  }

  // Obtener cantidad de productos
  getCantidadProductos(): number {
    return this.carritoService.productos.length;
  }
}




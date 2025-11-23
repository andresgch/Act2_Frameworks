import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../../../services/carrito-service';
import { Cart } from '../cart/cart';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
  @Output() carritoToggle = new EventEmitter<void>();

  // Inyecta el CarritoService en el constructor
  constructor(public carritoService: CarritoService) {}

  ngOnInit() {
    // Opcional: puedes inicializar algo aquí si es necesario
  }

  onCarritoClick() {
    this.carritoToggle.emit();
  }

  // Método para obtener la cantidad de productos
  obtenerCantidadCarrito(): number {
    return this.carritoService.obtenerCantidadProductos();
  }
}
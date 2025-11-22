import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  @Input() visible: boolean = false;

  @Output() cerrarCarrito = new EventEmitter<void>();
  onCerrarClick() {
        this.cerrarCarrito.emit();
    }
}




import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CarritoService } from '../../../services/carrito-service';
import { CheckoutService } from '../../../services/checkout-service';
import { Direccion } from '../models/pedido-model';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})

export class CheckoutComponent implements OnInit {
  direccion: Direccion = {
    calle: '',
    ciudad: '',
    codigoPostal: '',
    pais: ''
  };
  
  metodoPago: string = 'tarjeta';
  procesando: boolean = false;
  pedidoExitoso: boolean = false;
  numeroPedido: string = '';
  error: string = '';

  constructor(
    public carritoService: CarritoService, // ← Ahora usa el carrito real
    private checkoutService: CheckoutService,
    private router: Router
  ) {}

  ngOnInit() {
    // Verificar si el carrito está vacío
    if (this.carritoService.productos.length === 0) {
      console.log('Carrito vacío al entrar al checkout');
    }
  }

  volverAlCarrito() {
    this.router.navigate(['/cafeteria']);
  }

  volverACafeteria() {
    this.carritoService.limpiarCarrito();
    this.router.navigate(['/cafeteria']);
  }

  datosCompletos(): boolean {
    return (
      this.direccion.calle.trim() !== '' &&
      this.direccion.ciudad.trim() !== '' &&
      this.direccion.codigoPostal.trim() !== '' &&
      this.direccion.pais.trim() !== '' &&
      this.metodoPago.trim() !== '' &&
      this.carritoService.productos.length > 0
    );
  }

  async procesarPedido() {
    this.procesando = true;
    this.error = '';

    try {
      const pedido = {
        productos: this.carritoService.productos,
        direccion: this.direccion,
        metodoPago: this.metodoPago,
        total: this.carritoService.total
      };

      console.log('Procesando pedido:', pedido);

      // Simulamos el procesamiento
      const respuesta: any = await this.checkoutService.procesarPedido(pedido).toPromise();
      
      // Simulamos éxito después de 2 segundos
      setTimeout(() => {
        this.procesando = false;
        this.pedidoExitoso = true;
        this.numeroPedido = 'ORD-' + Date.now();
        
        // Opcional: Limpiar carrito después de éxito
        // this.carritoService.limpiarCarrito();
      }, 2000);

    } catch (err) {
      this.procesando = false;
      this.error = 'Error al procesar el pedido. Intenta nuevamente.';
      console.error('Error en checkout:', err);
    }
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from './../src/app/models/pedido-model';

@Injectable({
  providedIn: 'root',
})

export class CheckoutService {

  constructor(private http: HttpClient) { }

  // Simulamos enviar el pedido a un servidor
  procesarPedido(pedido: Pedido) {
    // En una app real, esto iría a una API verdadera
    return this.http.post('https://jsonplaceholder.typicode.com/posts', pedido);
    
    // Para simular sin internet, podemos usar:
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve({ success: true, orderId: 'ORD-' + Date.now() });
    //   }, 2000);
    // });
  }
}

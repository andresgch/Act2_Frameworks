import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkWithHref, RouterModule } from '@angular/router';
import { Navbar } from './navbar/navbar'
import { Cart } from './cart/cart';
import { Footer } from './footer/footer';
import { CheckoutComponent } from './checkout/checkout';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkWithHref, RouterModule, Navbar, Cart, Footer, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  protected readonly title = signal('Actividad 1'); 

  carritoVisible: boolean = false;
  alternarCarrito() {
    this.carritoVisible = !this.carritoVisible;
  }
}
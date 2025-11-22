import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel {
  images = ['../../assets/img/banner1.jpg', '../../assets/img/banner1.webp', '../../assets/img/banner1.webp'];

  indiceActual: number = 0;
  activeAnimation: boolean = false;
  direction: string = 'next';

  // 3. Método para cambiar a la siguiente imagen
  next() {
    if (this.activeAnimation) return;

    this.activeAnimation = true;
    this.direction = 'next';
    // Si el índice actual es el último, volvemos a 0.
    // Si no, incrementamos el índice.
    if (this.indiceActual < this.images.length - 1) {
      this.indiceActual++;
    } else {
      this.indiceActual = 0; // Vuelve a la primera imagen (loop)
    }

    // Resetear animación después de un tiempo
    setTimeout(() => {
      this.activeAnimation = false;
    }, 500);
  }

  // Opcional: Para ir hacia atrás
  prev() {
    if (this.activeAnimation) return;

    this.activeAnimation = true;
    this.direction = 'prev'; // ← Establece dirección
    if (this.indiceActual > 0) {
      this.indiceActual--;
    } else {
      this.indiceActual = this.images.length - 1; // Vuelve a la última imagen
    }

    setTimeout(() => {
      this.activeAnimation = false;
    }, 500);
  }

  // 4. Getter (Propiedad calculada) para el Property Binding
  get imagenActual(): string {
    return this.images[this.indiceActual];
  }
}

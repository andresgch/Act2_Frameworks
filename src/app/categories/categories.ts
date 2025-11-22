import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.html',
  styleUrl: './categories.css'
})

export class Categories {
  
categorias = [
    { nombre: 'Artes', imagen: 'art.svg', tooltip: 'Libros sobre pintura, música y escultura', seleccionado: false },
    { nombre: 'Biografías', imagen: 'biography.svg', tooltip: 'Historias de vida inspiradoras', seleccionado: false },
    { nombre: 'Autoayuda', imagen: 'selfhelp.svg', tooltip: 'Guías para el crecimiento personal', seleccionado: false },
    { nombre: 'Ciencias', imagen: 'science.svg', tooltip: 'Descubre el mundo de la física y biología', seleccionado: false },
    { nombre: 'Ficción', imagen: 'fiction.svg', tooltip: 'Novelas y relatos fantásticos', seleccionado: false },
    { nombre: 'Novelas', imagen: 'novel.svg', tooltip: 'Obras de narrativa general.', seleccionado: false },
  ];

  seleccionarCategoria(categoriaSeleccionada:any){
    this.categorias.forEach(item => {
      item.seleccionado = false;
    });
    categoriaSeleccionada.seleccionado = true;
  }
}
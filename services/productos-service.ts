import { Injectable } from '@angular/core';
import { Producto } from '../src/app/models/pedido-model'

@Injectable({
  providedIn: 'root',
})

export class ProductosService {

  private productos: Producto[] = [
    {
      id: 1,
      nombre: 'Café Americano',
      descripcion: 'Café negro tradicional',
      precio: 2.50,
      imagen: './assets/img/cafe-americano.jpg',
      categoria: 'bebidas-calientes'
    },
    {
      id: 2,
      nombre: 'Capuchino',
      descripcion: 'Espresso con leche vaporizada',
      precio: 3.50,
      imagen: './assets/img/capuchino.jpg',
      categoria: 'bebidas-calientes'
    },
    {
      id: 3,
      nombre: 'Croissant',
      descripcion: 'Crujiente y delicioso',
      precio: 2.00,
      imagen: './assets/img/croissant.jpg',
      categoria: 'panaderia'
    },
    {
      id: 4,
      nombre: 'Té Verde',
      descripcion: 'Té verde natural',
      precio: 2.00,
      imagen: './assets/img/te-verde.jpg',
      categoria: 'bebidas-calientes'
    },
    {
      id: 5,
      nombre: 'Muffin de Chocolate',
      descripcion: 'Esponjoso muffin con chips de chocolate',
      precio: 2.75,
      imagen: './assets/img/muffin-chocolate.jpg',
      categoria: 'reposteria'
    },
    {
      id: 6,
      nombre: 'Sándwich Club',
      descripcion: 'Sándwich de pollo, tocino y aguacate',
      precio: 5.50,
      imagen: './assets/img/sandwich.jpg',
      categoria: 'sandwiches'
    },
    {
      id: 7,
      nombre: 'Frappé de Chocolate',
      descripcion: 'Espumoso frappé de chocolate y canela',
      precio: 3.50,
      imagen: './assets/img/frappe.jpg',
      categoria: 'bebidas'
    },
{
      id: 8,
      nombre: 'Galleta de zanahoria',
      descripcion: 'Galleta vegana con un sabor exquisito',
      precio: 6.30,
      imagen: './assets/img/galleta.jpg',
      categoria: 'galletas'
    }
  ];

  obtenerProductos(): Producto[] {
    return this.productos;
  }

  obtenerProductosPorCategoria(categoria: string): Producto[] {
    return this.productos.filter(producto => producto.categoria === categoria);
  }
}

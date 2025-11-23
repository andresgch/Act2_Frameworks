export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoria: string;
}

export interface Direccion {
  calle: string;
  ciudad: string;
  codigoPostal: string;
  pais: string;
}

export interface Pedido {
  productos: Producto[];
  direccion: Direccion;
  metodoPago: string;
  total: number;
}
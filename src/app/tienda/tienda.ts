import { Component, OnInit } from '@angular/core';
import { Api } from '../../../services/api'

@Component({
  selector: 'app-tienda',
  imports: [],
  templateUrl: './tienda.html',
  styleUrl: './tienda.css',
})

export class Tienda implements OnInit{
  datos: any[] = [];
  loading: boolean = true; 
  error: string = '';

  
  constructor(private apiService: Api) {}

  ngOnInit() {
    this.traerDatos();
  }

  traerDatos() {
    this.loading = true;
    this.error = '';

    this.apiService.getBooks().subscribe({
      next: (respuesta: any) => {
        this.datos = respuesta;
         this.loading = false;
      },
      error: (error) => {
        console.log('¡Ups! Error 😢', error);
      }
    });
  }
}

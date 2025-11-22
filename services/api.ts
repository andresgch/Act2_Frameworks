import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class Api {
  constructor(private http: HttpClient) { } 

  //Obtener todos los libros:
  getBooks(){
    return this.http.get('https://mock.apidog.com/m1/968218-0-default/books');
  }

}

import { Routes } from '@angular/router';
import { FormContacto } from './form-contacto/form-contacto';
import { App } from './app';
import { Home } from './home/home';
import { Tienda } from './tienda/tienda';
import { Cafeteria } from './cafeteria/cafeteria';

export const routes: Routes = [ 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'tienda', component: Tienda},
  { path: 'cafeteria', component: Cafeteria},
  { path: 'contactanos', component: FormContacto },
];

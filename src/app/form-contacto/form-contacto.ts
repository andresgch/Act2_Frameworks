import { Component, OnInit, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], 
  templateUrl: './form-contacto.html',
  styleUrl: './form-contacto.css'
})
export class FormContacto implements OnInit{
  title = 'Contáctanos';
  formBuilder = inject(FormBuilder);

  isModalVisible: boolean = false; 

  formComunicaciones = this.formBuilder.group({
    name: new FormControl('', []), 
    email: new FormControl('', []),
    phone: new FormControl('', []),
    messaje: new FormControl('', []), 
  });

  ngOnInit(): void {
  }
  
  onSubmit() {
    console.log('Intento de envío. Mostrando popup.');
    this.showModal();
    this.formComunicaciones.reset();
  }
  showModal() {
    this.isModalVisible = true;
  }
  hideModal() {
    this.isModalVisible = false;
  }
};
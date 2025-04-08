import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-asistente',
  imports: [FormsModule, CommonModule],
  templateUrl: './asistente.component.html',
  styleUrl: './asistente.component.css'
})
export class AsistenteComponent {
  asistente = signal({
    nombre: '',
    edad: '',
    claseEscSabatica: 'Adultos', // Opciones: Adultos, Jóvenes, Niños
    fecha: new Date().toISOString().split('T')[0], // Fecha actual
  }); //Cuando el valor de un signal cambia, Angular actualiza automáticamente
  //  las partes de la interfaz que lo usan (sin necesidad de subscribe como en RxJS).
  clases = ['Adultos', 'Jóvenes', 'Niños'];
  onSubmit() {
    console.log('Asistente registrado:', this.asistente());
    // Aquí podrías enviar los datos a un servicio o API
    alert(`¡${this.asistente().nombre} registrado/a en la clase de ${this.asistente().claseEscSabatica}!`);
  }
}

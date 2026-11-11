import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})

export class Registro {

  nombre: string = '';
  programa: string = '';
  edad: number | null = null;

  mensaje: string = '';

  estudiantes: any[] = [];

  registrar() {

    if (
      this.nombre.trim() === '' ||
      this.programa.trim() === '' ||
      this.edad === null ||
      !Number.isInteger(this.edad) ||
      this.edad <= 0 ||
      this.edad > 120
    ) {

      this.mensaje = 'Por favor complete todos los campos correctamente';
      return;
    }

    this.estudiantes.push({
      nombre: this.nombre,
      programa: this.programa,
      edad: this.edad
    });

    this.nombre = '';
    this.programa = '';
    this.edad = null;

    this.mensaje = 'Estudiante registrado correctamente';
  }

}
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css'
})

export class Calculadora {

  numero1: number | null = null;
  numero2: number | null = null;

  resultado: number | null = null;
  mensaje: string = '';

  sumar() {

    if (this.numero1 === null || this.numero2 === null ||
        !Number.isFinite(this.numero1) || !Number.isFinite(this.numero2)) {

      this.mensaje = 'Por favor ingrese los dos números';
      this.resultado = null;
      return;
    }

    this.resultado = this.numero1 + this.numero2;
    this.mensaje = '';
  }

  restar() {

    if (this.numero1 === null || this.numero2 === null ||
        !Number.isFinite(this.numero1) || !Number.isFinite(this.numero2)) {

      this.mensaje = 'Por favor ingrese los dos números';
      this.resultado = null;
      return;
    }

    this.resultado = this.numero1 - this.numero2;
    this.mensaje = '';
  }

}
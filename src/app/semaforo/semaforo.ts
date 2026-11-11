import { Component } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  standalone: true,
  imports: [],
  templateUrl: './semaforo.html',
  styleUrl: './semaforo.css'
})

export class Semaforo {

  color: string = '';
  mensaje: string = '';

  rojo() {
    this.color = 'red';
    this.mensaje = 'Detenerse';
  }

  amarillo() {
    this.color = 'yellow';
    this.mensaje = 'Precaución';
  }

  verde() {
    this.color = 'green';
    this.mensaje = 'Avanzar';
  }

}
import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})

export class Catalogo {

  productos = [
    {
      nombre: 'Celular Infinix',
      categoria: 'Tecnología',
      precio: 850000
    },
    {
      nombre: 'Mouse inalambrico',
      categoria: 'Accesorios',
      precio: 45000
    },
    {
      nombre: 'Teclado mecanico',
      categoria: 'Accesorios',
      precio: 150000
    },
    {
      nombre: 'Audifonos',
      categoria: 'Audio',
      precio: 80000
    },
    {
      nombre: 'Portatil HP',
      categoria: 'Computadores',
      precio: 2500000
    }
  ];

}
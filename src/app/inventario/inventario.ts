import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Producto {
  nombre: string;
  cantidad: number;
  precio: number;
}

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inventario.html',
  styleUrl: './inventario.css'
})

export class Inventario {

  nombre: string = '';
  cantidad: number | null = null;
  precio: number | null = null;

  mensaje: string = '';

  productos: Producto[] = [];

  registrar() {

    if (
      this.nombre.trim() === '' ||
      this.cantidad === null ||
      this.precio === null ||
      !Number.isFinite(this.cantidad) ||
      !Number.isFinite(this.precio) ||
      this.cantidad < 0 ||
      this.precio < 0
    ) {

      this.mensaje = 'Complete los datos correctamente. No se permiten valores negativos.';
      return;
    }

    this.productos.push({
      nombre: this.nombre.trim(),
      cantidad: this.cantidad,
      precio: this.precio
    });

    this.nombre = '';
    this.cantidad = null;
    this.precio = null;

    this.mensaje = 'Producto registrado correctamente';
  }

  eliminar(indice: number) {

    this.productos.splice(indice, 1);

    this.mensaje = 'Producto eliminado correctamente';
  }

}


import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class CalificacionComponent {
  opciones = [
    { id: 1, nombre: 'Valoracion Mala' },
    { id: 2, nombre: 'Valoracion Buena' },
    { id: 3, nombre: 'Valoracion Exelente' }
  ];
  seleccionados = new FormControl();

  enviar() {
    const seleccionados = this.seleccionados.value.map((opcion: any) => opcion.id);
    console.log(seleccionados); 
  }

  compararPorId(opcion1: any, opcion2: any) {
    return opcion1 && opcion2 ? opcion1.id === opcion2.id : opcion1 === opcion2;
  }
}

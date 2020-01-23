import { Component } from '@angular/core';
import { browser } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = "Gilbert";
  nombre2: string = "gilbERto santIAgo acOSta bOCio";

  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  a: number = 0.234;
  salario: number = 1234.5;

  heroe = {
    nombre: "logan",
    clave: "wolverine",
    edad: 500,
    direccion: {
      calle: "Primera",
      casa: "19"
    }
  };

  valorDePromesa = new Promise ( (resolve, reject) => {

    setTimeout(() => resolve('llego la data!!'), 3500);

  } );

  fecha = new Date();

  video = 'olKYiTioAG8';

  activar :  boolean = true;

  


}

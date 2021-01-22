import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  numberSeparator(number: number, separator: string) {
    let nombre: string = number.toString();
    var reg = /(\d+)(\d{3})/;
    while (reg.test(nombre)) {
      nombre = nombre.replace(reg, '$1' + separator + '$2');
    }
    return nombre;
  }
}

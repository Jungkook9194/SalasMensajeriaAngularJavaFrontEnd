import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customOrder'
})
export class CustomOrderPipe implements PipeTransform {
  transform(salas: any[], ascendente: boolean): any[] {
    if (!salas) return [];
    if (ascendente) {
      return salas.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else {
      return salas.sort((a, b) => b.nombre.localeCompare(a.nombre));
    }
  }
}
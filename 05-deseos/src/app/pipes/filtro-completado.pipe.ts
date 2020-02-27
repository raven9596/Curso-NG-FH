import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  listaCompletada: any;
  transform(listas: Lista[], completada: boolean = true ): Lista[] {

    this.listaCompletada = listas.filter( lista => lista.terminada === completada );

    return this.listaCompletada;
  }

}

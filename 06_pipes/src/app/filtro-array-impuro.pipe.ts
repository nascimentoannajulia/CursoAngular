import { Pipe, PipeTransform } from '@angular/core';

import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';

@Pipe({
  name: 'filtroArrayImpuro'
  pure: false;
})
export class FiltroArrayImpuroPipe implements PipeTransform {

}

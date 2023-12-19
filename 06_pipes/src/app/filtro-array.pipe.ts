import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
  
    if(value..legth === 0 || args === udefined){
      return value;
    }

    lef filter = args.tolocalLowerCase();
    return value.filter(
       v => v.toLocalLowerCase().indexOf(filter) != -1
    );
  }

}

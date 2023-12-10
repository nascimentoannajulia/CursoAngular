import { Component OnInt } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrl: './input-property.component.css'
  //inputs: ['nomeCurso']
})
export class InputPropertyComponent implements OnInt {

  //@Input('nome')
   @input('nome') nomeCurso: string = '';
   
   constructor() { }

   ngOnInit() {
   }
}

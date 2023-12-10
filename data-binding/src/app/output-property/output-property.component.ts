import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.css'
  //outputs: ['mudouValor']
})
export class OutputPropertyComponent implements OnInit {
  
 @input() valor: number = 0;

 @Output() mudouValor = new EventEmitter();

 campoValorInput: HTMLElement;

  incrementa(){
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }
  
  constructor(){ }

  ngOnInit(){ 

  }

}

import { Component, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.css'
  //outputs: ['mudouValor']
})
export class OutputPropertyComponent implements OnInit {
  
 @input() valor: number = 0;

 @Output() mudouValor = new EventEmitter();

 @ViewChild('campoInput') campoValorInput: ElementRef;

  incrementa(){
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});
  }
  
  constructor(){ }

  ngOnInit(){ 

  }

}

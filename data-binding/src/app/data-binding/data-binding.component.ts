import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
 // styleUrls: './data-binding.component.css'
styles:[
  highlight{
    background-color: yellow;
    font-weight: bold;
}
]
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/nature/';

  valorAtual: string = ''; 
  valorSalvo = '';

  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  valorInicial = 15;

  getValor(){
    return 1;
  }
  
  getCurtirCurso(){
    return true;
  }
  
  pessoa: any = {
    nome: 'def',
    idade: 20;
    end
  }

  getValor(){
    return 1
  }

  getCurtirCurso(){
    return true;
  }

   botaoClicado(){
      alert('Botão clicado!');
   }

   onKeyUp(evento: KeyboardEvent){
     console.log((<HTMLInputElement>evento.target).value);
   }

   salvaValor(valor){
     this.valorSalvo = valor;
   }

   onMouserOverOut(){
    this.isMouseOver = !this.isMouseOver;
   }

   onMudouValor(evento){
     console.log(evento.novoValor);
   }

  constructor(){ }

  ngOnInit(){ 

  }
}

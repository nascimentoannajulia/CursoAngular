import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrl: './operador-elvis.component.css'
})
export class OperadorElvisComponent {
 
  tarefa: any = {
    desc: 'Descrição da tarefa',
    responsavel: {
      usuario: null
    }
    //responsavel : {{nome: 'loiane'}}
  };
   
  constructor(){ }

  ngOnInit(){
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrl: './diretiva-ngfor.component.css'
})
export class DiretivaNgforComponent {

  cursos: string[] = ["Angualar 2", "Java", "Phonegap"];

  constructor(){ }

  ngOnInit(){ 
    for (let i=0; i<this.cursos.legth; 1++){
       let curso = this.cursos[i];
    }
  }

}

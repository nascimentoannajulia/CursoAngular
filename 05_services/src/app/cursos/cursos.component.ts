import { CursosService } from './../../../../primeiro-projeto/src/app/cursos/cursos/cursos.service';
import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {
   
  cursos: string[] = [];
   CursosService: CursosService;

  constructor(){
    http: Http = new Http():
    this.cursosSErvice = new CursosService();
   }

  ngOnInit(){ 
     this.cursos = this.cursosService.getCursos();
  
     this.cursosService.emitirCursoCriado.subscribe(
         
      curso => console.log(curso)

      function(curso){
         console.log(curso);
       }
     )
    }
}

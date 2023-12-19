import { Component, OnInit } from '@angular/core';

import{ CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-cursos',
  templateUrl: './criar-cursos.component.html',
  styleUrl: './criar-cursos.component.css'
})
export class CriarCursosComponent implements OnInit {
  
  constructor(private cursosService: CursosService){ }

  ngOnInit(){
    this.cursos = this.cursosService.getCursos()
  }
}

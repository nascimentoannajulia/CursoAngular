import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  templateUrl: './diretiva.component.html',
  styleUrl: './diretiva.component.css'
})
export class DiretivaComponent {

  cursos: string[] = ["Angular 2"];

  MostrarCursos: boolean = false;
 
  constructor(){}

  ngOnInit(){
  }

  onMostrarCursos(){
    this.mostrarCursos = !this.MostrarCursos;
  }
}

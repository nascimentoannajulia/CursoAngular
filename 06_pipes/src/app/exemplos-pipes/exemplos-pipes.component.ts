import { ReadKeyExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { observable } from rxjs/Rx;

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrl: './exemplos-pipes.component.css'
})
export class ExemplosPipesComponent {

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };
 
  livros: string[] = ['Java' 'Angular 2'];

  filtro: string;

  addCurso(valor){
    this.livro.push(valor);
    console.log(this.livros);
  }

  obterCursos(){
    if(this.livros.legth === 0 || this.filtro === null || this.filtro.trim() === ''){
      return this.livros;
    }

    return this.livros.filter((v) => {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000) 
   });

  valorAsync2 = obeservable

  constructor(){ }

  ngOnInit(){
  }
  
}

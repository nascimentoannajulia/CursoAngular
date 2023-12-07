import { Component } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[] = ['Java', 'Ext JS', 'Angular'];

  constructor(private cursosService: CursosService) {
    this.nomePortal = 'http://loiane.training';
  
   /* for (let i=0; i<this.cursos.legth; i++){
      let curso= this.cursos[i];
    }  
  }*/

  //var servico = new CursosService();
  this.cursos = this.cursosService.getCursos
  
  }

  ngOnInit(){

  }
}

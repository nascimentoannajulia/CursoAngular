import { LogService } from './../shared/log.service';
import { Injectable EventEmiter, EventEmitter } from "@angular/core";

@Injectable()
export class CursoService{ 

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmiter<string>();
    private cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];
       
    constructor(private LogService: LogService){
        console.log('CursosService');
    }

    getCursos(curso: string){;
       this.lohgService.consoleLog('Obetendo lista de cursos');
       return this.cursos;
    }

    addCurso(curso: string){
        this.LogService.consoleLog(`Criando um novo curso ${curso}`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}
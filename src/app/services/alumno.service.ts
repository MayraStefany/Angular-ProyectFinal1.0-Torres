import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProbandoAlumno } from '../interfaces/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private alumnoObservable:Observable<any>;
  private alumnoSubject: Subject<any>;

  listalumnos: ProbandoAlumno[]=[
    {id:1, nombre: "Mayra", apellido: "Torres", edad:21, curso: "Fisica", estado:"Aprovado"},
    {id:2, nombre: "Angela", apellido: "Agilar", edad:23, curso: "Programacion", estado:"En curso"},
    {id:3, nombre: "Daniel", apellido: "Gonzales", edad:25, curso: "Literatura", estado:"En curso"},
    {id:4, nombre: "Marko", apellido: "Figueroa", edad:22, curso: "Quimica", estado:"Aprovado"},
  ];
  constructor() { 
    this.alumnoObservable=new Observable((suscripcion)=> {
      suscripcion.next(this.listalumnos);
    });
    this.alumnoSubject= new Subject();
  }
  obtenerObservable(){
    return this.alumnoObservable;
  }

  getAlumno(){
    return this.listalumnos.slice();
  }

  eliminarAlumno(index: number){
     this.listalumnos.splice(index,1);
  }

}



import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AlumnoService } from '../../services/alumno.service';
import { ProbandoAlumno } from '../../interfaces/alumno';
//import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  
  listAlumnos: ProbandoAlumno[]=[];


  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'edad','curso','estado','acciones'];
  dataSource!:MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

//Agregar un alumno
tiles: any[] = [
  {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
];
//termina la exportacion class: CrearAlumnoComponent
  

  constructor( 
    private alumnoService: AlumnoService,
    //private _snackBar: MatSnackBar 
  
  ) { }

  ngOnInit(): void {  
    this.cargarAlumnos();
  }

  //Ts : del Paginator
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  } 

  cargarAlumnos(){
    this.listAlumnos=this.alumnoService.getAlumno();
    this.dataSource = new MatTableDataSource(this.listAlumnos)
  }
  
  eliminarAlumno(index: number){
    this.alumnoService.eliminarAlumno(index);

    //actualiza la lista de alumnos con el usuario eliminado
    this.cargarAlumnos();

    //Muestra el mensaje
    //this._snackBar.open('El Alumno fue eliminado con exito','',{
      //duration: 1500,
      //horizontalPosition: 'center',
      //verticalPosition: 'bottom'
    //})
  }

}

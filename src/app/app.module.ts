import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './modules/app.material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AlumnoService } from './services/alumno.service';
import { CrearAlumnoComponent } from './components/alumnos/crear-alumno/crear-alumno.component';


@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    CrearAlumnoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FlexLayoutModule
  ],
  providers: [
    AlumnoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

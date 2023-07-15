import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfesionesAgregarComponent } from './profesiones/profesiones.agregar/profesiones.agregar.component';
import { ProfesionesListarComponent } from './profesiones/profesiones.listar/profesiones.listar.component';
import { ProfesionesModificarComponent } from './profesiones/profesiones.modificar/profesiones.modificar.component';
import { CategoriaListarComponent } from './categoria/categoria.listar/categoria.listar.component';
import { CategoriaAgregarComponent } from './categoria/categoria.agregar/categoria.agregar.component';
import { EstudiantesAgregarComponent } from './usuarios/estudiantes.agregar/estudiantes.agregar.component';
import { UsuariosListarComponent } from './usuarios/usuarios.listar/usuarios.listar.component';
import { EvaAgregarComponent } from './evaluaciones/eva.agregar/eva.agregar.component';
import { EvaListarComponent } from './evaluaciones/eva.listar/eva.listar.component';
import { EvaListarPreguntasComponent } from './evaluaciones/eva.listar.preguntas/eva.listar.preguntas.component';
import { PlanesListarComponent } from './planes/planes.listar/planes.listar.component';
import { PlanesAgregarComponent } from './planes/planes.agregar/planes.agregar.component';
import { EvaModificarComponent } from './evaluaciones/eva.modificar/eva.modificar.component';
import { EvaAgregarPreguntaComponent } from './evaluaciones/eva.agregar.pregunta/eva.agregar.pregunta.component';
import { EvaModificarPreguntaComponent } from './evaluaciones/eva.modificar.pregunta/eva.modificar.pregunta.component';


@NgModule({
  declarations: [
    DashboardComponent,
    WelcomeComponent,
    ProfesionesAgregarComponent,
    ProfesionesListarComponent,
    ProfesionesModificarComponent,
    CategoriaListarComponent,
    CategoriaAgregarComponent,
    EstudiantesAgregarComponent,
    UsuariosListarComponent,
    EvaAgregarComponent,
    EvaListarComponent,
    EvaListarPreguntasComponent,
    PlanesListarComponent,
    PlanesAgregarComponent,
    EvaModificarComponent,
    EvaAgregarPreguntaComponent,
    EvaModificarPreguntaComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }

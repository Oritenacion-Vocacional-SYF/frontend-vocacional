import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfesionesListarComponent } from './profesiones/profesiones.listar/profesiones.listar.component';
import { ProfesionesAgregarComponent } from './profesiones/profesiones.agregar/profesiones.agregar.component';
import { ProfesionesModificarComponent } from './profesiones/profesiones.modificar/profesiones.modificar.component';
import { CategoriaListarComponent } from './categoria/categoria.listar/categoria.listar.component';
import { UsuariosListarComponent } from './usuarios/usuarios.listar/usuarios.listar.component';
import { EstudiantesAgregarComponent } from './usuarios/estudiantes.agregar/estudiantes.agregar.component';
import { EvaListarComponent } from './evaluaciones/eva.listar/eva.listar.component';
import { EvaListarPreguntasComponent } from './evaluaciones/eva.listar.preguntas/eva.listar.preguntas.component';
import { EvaAgregarComponent } from './evaluaciones/eva.agregar/eva.agregar.component';
import { PlanesAgregarComponent } from './planes/planes.agregar/planes.agregar.component';
import { PlanesListarComponent } from './planes/planes.listar/planes.listar.component';
import { CategoriaAgregarComponent } from './categoria/categoria.agregar/categoria.agregar.component';

import { EvaModificarComponent } from './evaluaciones/eva.modificar/eva.modificar.component';
import { EvaAgregarPreguntaComponent } from './evaluaciones/eva.agregar.pregunta/eva.agregar.pregunta.component';
import { EvaModificarPreguntaComponent } from './evaluaciones/eva.modificar.pregunta/eva.modificar.pregunta.component';

import { PlanesModificarComponent } from './planes/planes.modificar/planes.modificar.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'profesiones',
        component: ProfesionesListarComponent,
      },
      {
        path: 'profesiones/agregar',
        component: ProfesionesAgregarComponent,
      },
      {
        path: 'profesiones/modificar',
        component: ProfesionesModificarComponent
      },
      {
        path: 'categorias',
        component: CategoriaListarComponent
      },
      {
        path: 'agregar-categoria',
        component: CategoriaAgregarComponent
      },
      {
        path: 'usuarios',
        component: UsuariosListarComponent
      },
      {
        path: 'usuarios/agregar',
        component: EstudiantesAgregarComponent
      },
      {
        path: 'evaluaciones',
        component: EvaListarComponent
      },
      {
        path: 'agregar-evaluacion',
        component: EvaAgregarComponent
      },
      {
        path: 'evaluaciones/:evaluacionId',
        component: EvaModificarComponent
      },
      {
        path: 'preguntas/:evaluacionId/:titulo',
        component: EvaListarPreguntasComponent
      },
      {
        path: 'agregar-pregunta/:evaluacionId/:titulo',
        component: EvaAgregarPreguntaComponent
      },
      {
        path: 'modificar-pregunta/:preguntaId',
        component: EvaModificarPreguntaComponent
      },
      {
        path:'planes',
        component: PlanesListarComponent
      },
      {
        path:'planes/agregar',
        component: PlanesAgregarComponent
      },
      {
        path:'planes/modificar',
        component: PlanesModificarComponent
      },

    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

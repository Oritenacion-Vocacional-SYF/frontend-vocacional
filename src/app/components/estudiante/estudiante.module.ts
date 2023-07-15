import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudianteRoutingModule } from './estudiante-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from 'src/app/material/material.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoadExamenComponent } from './load-examen/load-examen.component';
import { InstruccionesComponent } from './instrucciones/instrucciones.component';
import { StartComponent } from './start/start.component';


@NgModule({
  declarations: [
    DashboardComponent,
    WelcomeComponent,
    LoadExamenComponent,
    InstruccionesComponent,
    StartComponent
  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule,
    MaterialModule
  ]
})
export class EstudianteModule { }

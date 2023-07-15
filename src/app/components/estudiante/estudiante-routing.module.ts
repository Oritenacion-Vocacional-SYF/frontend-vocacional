import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from '../profile/profile.component';
import { LoadExamenComponent } from './load-examen/load-examen.component';
import { InstruccionesComponent } from './instrucciones/instrucciones.component';
import { StartComponent } from './start/start.component';

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
        path: ':catId',
        component: LoadExamenComponent
      },
      {
        path: 'instrucciones/:evaluacionId',
        component: InstruccionesComponent
      }
    ]
  },
  {path: "start/:evaluacionId", component: StartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }

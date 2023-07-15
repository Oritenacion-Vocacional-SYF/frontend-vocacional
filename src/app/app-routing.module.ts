import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginUserComponent } from './components/login/login-user/login-user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginUserComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./components/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'estudiante',
    loadChildren: () =>
      import('./components/estudiante/estudiante.module').then(
        (m) => m.EstudianteModule
      ),
  },
  {
    path: 'estudiante/planes',
    loadChildren: () =>
      import('./components/estudiante/planes/planes.module').then(
        (m) => m.PlanesModule
      ),
  },

  //{path: "**", redirectTo: "home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

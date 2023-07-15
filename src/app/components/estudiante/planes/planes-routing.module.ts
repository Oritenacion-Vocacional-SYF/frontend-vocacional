import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprarComponent } from './comprar/comprar.component';
import { ListarPlanComponent } from './listar-plan/listar-plan.component';

const routes: Routes = [
  {path: "listar", component: ListarPlanComponent},
  {path: "comprar/:oPlan", component: ComprarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanesRoutingModule { }

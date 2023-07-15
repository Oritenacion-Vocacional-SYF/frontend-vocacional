import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanesRoutingModule } from './planes-routing.module';
import { ComprarComponent } from './comprar/comprar.component';
import { ListarPlanComponent } from './listar-plan/listar-plan.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    ComprarComponent,
    ListarPlanComponent
  ],
  imports: [
    CommonModule,
    PlanesRoutingModule,
    MaterialModule
  ]
})
export class PlanesModule { }

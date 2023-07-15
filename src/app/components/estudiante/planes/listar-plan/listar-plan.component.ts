import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from 'src/app/model/plan';
import { PlanService } from 'src/app/service/plan.service';

@Component({
  selector: 'app-listar-plan',
  templateUrl: './listar-plan.component.html',
  styleUrls: ['./listar-plan.component.css']
})
export class ListarPlanComponent implements OnInit {

  planes: Plan[];
  constructor(private planServicio:PlanService, private router:Router){}
  
  ngOnInit(): void {
     this.obtenerPlan();
  }

  obtenerPlan(){
    this.planServicio.obtenerPlanes().subscribe(dato=>{
      this.planes = dato;
    })
  }

  redirComprar(oP:Plan){
    const oPlan = btoa(JSON.stringify(oP));
    this.router.navigate(['/estudiante/planes/comprar', oPlan]);
  }

}

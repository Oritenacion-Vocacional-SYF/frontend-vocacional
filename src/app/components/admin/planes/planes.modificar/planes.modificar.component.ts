import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plan } from 'src/app/model/plan';
import { PlanService } from 'src/app/service/plan.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-planes.modificar',
  templateUrl: './planes.modificar.component.html',
  styleUrls: ['./planes.modificar.component.css']
})
export class PlanesModificarComponent implements OnInit {

  idPlan:number;
  plan:Plan = new Plan();
  
  constructor(private planServicio:PlanService, private router:Router, private route:ActivatedRoute){}


  ngOnInit(): void {
    this.idPlan = this.route.snapshot.params['id_plan'];
    this.planServicio.buscarPlan(this.idPlan).subscribe(dato =>{
      this.plan = dato;
    },error => console.log(error));
  }

  redirProf(){
    this.router.navigate(['/admin/planes']);
    swal('Plan Actualizado.',`El ${this.plan.nombre_plan} ha sido actualizado con éxito.`,`success`);
  }

  onSubmit(){
    this.planServicio.modificarPlan(this.plan).subscribe(dato => {
      this.redirProf();
    },error => console.log(error));
  }
}

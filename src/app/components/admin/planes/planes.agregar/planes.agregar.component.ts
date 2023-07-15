import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from 'src/app/model/plan';
import { PlanService } from 'src/app/service/plan.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-planes.agregar',
  templateUrl: './planes.agregar.component.html',
  styleUrls: ['./planes.agregar.component.css']
})
export class PlanesAgregarComponent implements OnInit{

  plan: Plan = new Plan();

  constructor(private planServicio:PlanService, private router:Router){}

  ngOnInit(): void {}

  agregarPlan(){
    this.planServicio.agregarPlanes(this.plan).subscribe(dato =>{ 
      console.log(dato);
      this.redirPlanes();
    }, error=>console.log(error));
  }

  redirPlanes(){
    this.router.navigate(['admin/planes'])
    swal('Plan Registrado.',`El plan ${this.plan.nombre_plan} ha sido registrado con éxito.`,`success`);
  }

  onSubmit(){
    this.agregarPlan();
  }
}
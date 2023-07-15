import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from 'src/app/model/plan';
import { PlanService } from 'src/app/service/plan.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listar-plan',
  templateUrl: './listar-plan.component.html',
  styleUrls: ['./listar-plan.component.css']
})
export class ListarPlanComponent implements OnInit {

  suscrito: boolean;
  planes: Plan[];
  idPlan: number;

  constructor(private planServicio:PlanService, private router:Router,  private route: ActivatedRoute){}
  
  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        this.suscrito = params['suscrito'] === 'true'; 
        this.idPlan = params['idPlan'];
        console.log(this.suscrito);
        console.log("sdasadsdasda");
        console.log(this.idPlan);

    });
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

  cancelarSuscripcion(){
    swal({
      title: '¿Estás seguro que quieres Cancelar la Suscripción?',
      text: 'Recuerda que al cancelar, solo se te devolverá el 50% de tu dinero.\nSi tienes alguna duda contactarte con el siguiente correo electrónico jeanpierre@gmail.com.\nDebes confirmar si deseas cancelar',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cancelar suscripción',
      cancelButtonText: 'No, seguir suscrito.',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
    }).then((result) => {
      if (result.value) {
            swal(
              'Suscripción eliminada',
              'Tu suscripción ha sido cancelada con éxito, en los próximos días se te hará la devolución',
              'success'
            );
            this.suscrito = false;
            this.obtenerPlan();
      }
    });
  }
}

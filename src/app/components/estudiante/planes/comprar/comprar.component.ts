import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Detalle } from 'src/app/model/detalle';
import { Pago } from 'src/app/model/pago';
import { Plan } from 'src/app/model/plan';
import { DetalleService } from 'src/app/service/detalle.service';
import { PagoService } from 'src/app/service/pago.service';
import swal from 'sweetalert2';

declare const paypal: any;

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit{

  oP: Plan;
  oD: Detalle;
  pago:Pago = new Pago();
  @ViewChild('paypal',{static:true}) paypalElement : ElementRef;

  constructor(private detalleServicio:DetalleService, private pagoServicio: PagoService, private route: ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    const encodedPlan = this.route.snapshot.params['oPlan'];
    const decodedPlan = JSON.parse(atob(encodedPlan));
    this.oP = decodedPlan;
    console.log(this.oP);
    this.pagarPaypal();
  }

  pagarPaypal(){
    paypal.Buttons({
      createOrder:(data: any, actions: any)=>{
        return actions.order.create({
          purchase_units:[
            {
              description: this.oP.descripcion,
              amount:{
                currency_code: 'USD',
                value: this.oP.costo
              }
            }
          ]
        })
      },
    onApprove: async(data: any, actions: any) => {
      const order = await actions.order.capture();
      console.log(order);
      swal('Suscripción registrada',`Felicidades te suscribiste a nuestro plan ${this.oP.nombre_plan} con éxito.`,`success`);
      this.pago.metodo_pago = "Paypal";
      this.registrarPago(this.pago);
      this.regresar();
    },
    onError: (err: any) =>{
      console.log(err);
      swal('Suscripción rechazada',`Lo sentimos, no se pudo completar la suscripción a nuestro plan ${this.oP.nombre_plan}.`,`warning`);
      this.regresar();
    }
    }).render(this.paypalElement.nativeElement);
  }

  regresar() {
      this.router.navigate(['/estudiante/planes/listar']);
  }
  
  registrarPago(pago:Pago){
    this.pagoServicio.registrarPago(pago).subscribe(dato =>{ 
      console.log(dato);
      if ('id_pago' in dato) {
        const idPago = <number>dato.id_pago;
        console.log(idPago);
        this.insertarDatos(idPago);
        this.registrarDetalle(this.oD);
      }
    }, error=>console.log(error));
  }

  registrarDetalle(detalle:Detalle){
    this.detalleServicio.registrarDetalle(detalle).subscribe(dato =>{ 
      console.log(dato);
    }, error=>console.log(error));
  }

  insertarDatos(idPago:number){
    this.oD = {estudiante:{dni:"12345678"}, plan:{id_plan:this.oP.id_plan},pago:{id_pago:idPago}};
    console.log(this.oD);
  }
}

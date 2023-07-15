import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profesion } from 'src/app/model/profesion';
import { ProfesionService } from 'src/app/service/profesion.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-profesiones.modificar',
  templateUrl: './profesiones.modificar.component.html',
  styleUrls: ['./profesiones.modificar.component.css']
})
export class ProfesionesModificarComponent implements OnInit {

  idProfesion:number;
  profesion:Profesion = new Profesion();
  
  constructor(private profesionServicio:ProfesionService, private router:Router, private route:ActivatedRoute){}


  ngOnInit(): void {
    this.idProfesion = this.route.snapshot.params['id_profesion'];
    this.profesionServicio.buscarProfesion(this.idProfesion).subscribe(dato =>{
      this.profesion = dato;
    },error => console.log(error));
  }

  redirProf(){
    this.router.navigate(['/admin/profesiones']);
    swal('Profesión Actualizada.',`La carrera ${this.profesion.nombre} ha sido actualizada con éxito.`,`success`);
  }

  onSubmit(){
    this.profesionServicio.modificarProfesion(this.profesion).subscribe(dato => {
      this.redirProf();
    },error => console.log(error));
  }
}

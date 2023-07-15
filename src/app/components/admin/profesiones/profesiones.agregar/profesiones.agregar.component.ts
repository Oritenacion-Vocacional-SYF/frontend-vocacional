import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profesion } from 'src/app/model/profesion';
import { ProfesionService } from 'src/app/service/profesion.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-profesiones.agregar',
  templateUrl: './profesiones.agregar.component.html',
  styleUrls: ['./profesiones.agregar.component.css']
})
export class ProfesionesAgregarComponent implements OnInit{

  profesion: Profesion = new Profesion();
  constructor(private profesionServicio:ProfesionService, private router:Router){}

  ngOnInit(): void {}

  agregarProfesion(){
    this.profesionServicio.agregarProfesiones(this.profesion).subscribe(dato =>{ 
      console.log(dato);
      this.redirProfesiones();
    }, error=>console.log(error));
  }

  redirProfesiones(){
    this.router.navigate(['admin/profesiones'])
    swal('Profesión Registrada.',`La carrera ${this.profesion.nombre} ha sido registrada con éxito.`,`success`);
  }

  onSubmit(){
    this.agregarProfesion();
  }
}

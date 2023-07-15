import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreguntaService } from 'src/app/service/pregunta.service';
import { PruebaTerminadaService } from 'src/app/service/prueba-terminada.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  evaluacionId: any;
  preguntas: any;
  puntosConseguidos = 0;
  respuestasCorrectas = 0;
  intentos = 0;
  dni_estudiante = '70649612';

  esEnviado = false;
  timer: any;

  constructor(
    private locationSt: LocationStrategy,
    private route: ActivatedRoute,
    private preguntaService: PreguntaService,
    private pruebaTerminadaService: PruebaTerminadaService
  ) {}

  ngOnInit(): void {
    this.prevenirRetroceso();
    this.evaluacionId = this.route.snapshot.params['evaluacionId'];
    console.log(this.evaluacionId);
    this.cargarPreguntas();
  }

  cargarPreguntas() {
    this.preguntaService
      .listarPreguntasDeLaEvaluacionParaRendir(this.evaluacionId)
      .subscribe((data: any) => {
        console.log(data);
        this.preguntas = data;

        this.timer = this.preguntas.length * 2 * 60;

        this.preguntas.forEach((p: any) => {
          p['respuestaEstudiante'] = '';
        });
        this.iniciarTemporizador();
      }),
      (error: any) => {
        console.log(error);
        swal(
          'Error',
          'Error al cargar las preguntas de la evaluación.',
          'error'
        );
      };
  }

  iniciarTemporizador() {
    let t = window.setInterval(() => {
      if (this.timer <= 0) {
        this.evaluarEvaluacion();
        clearInterval(t);
      } else {
        this.timer--;
      }
    }, 1000);
  }

  prevenirRetroceso() {
    history.pushState(null, null!, location.href);
    this.locationSt.onPopState(() => {
      history.pushState(null, null!, location.href);
    });
  }

  enviarEvaluacion() {
    swal({
      title: '¿Quieres enviar el examen?',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Enviar',
      type: 'info',
    }).then((result) => {
      if (result.value) {
        this.evaluarEvaluacion();
      }
    });
  }

  evaluarEvaluacion() {
    this.preguntaService.evaluarPreguntas(this.preguntas).subscribe(
      (data: any) => {
        console.log(data);
        this.puntosConseguidos = data.puntaje_maximo;
        this.respuestasCorrectas = data.respuestas_correctas;
        this.intentos = data.intentos;
        this.esEnviado = true;
        this.guardarPruebaEstudiante();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  guardarPruebaEstudiante() {
    let prueba = {
      puntaje_obtenido: this.puntosConseguidos,
      estudiante: {
        dni: this.dni_estudiante,
      },
      evaluacion: {
        id_evaluacion: this.evaluacionId,
      },
    };

    this.pruebaTerminadaService
      .registrarPruebaTerminada(prueba)
      .subscribe((data) => {
        console.log(data);
      });
  }

  obtenerHoraFormateada() {
    let mm = Math.floor(this.timer / 60);
    let ss = this.timer - mm * 60;
    return `${mm} min ${ss} seg`;
  }

  imprimirPagina() {
    window.print();
  }
}

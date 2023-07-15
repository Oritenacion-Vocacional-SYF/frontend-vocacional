import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstudianteService } from 'src/app/service/estudiante.service';
import { EvaluacionService } from 'src/app/service/evaluacion.service';
import { LoginService } from 'src/app/service/login.service';
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
  esPrueba = false;
  evaluacion_categoria: any;
  vocacion: any;
  esEnviado = false;
  timer: any;
  estudiante: any;

  constructor(
    private locationSt: LocationStrategy,
    private route: ActivatedRoute,
    private preguntaService: PreguntaService,
    private pruebaTerminadaService: PruebaTerminadaService,
    private evaluacionService: EvaluacionService,
    private loginService: LoginService,
    private estudianteService: EstudianteService
  ) {}

  ngOnInit(): void {
    this.obtenerEstudiante();
    this.prevenirRetroceso();
    this.evaluacionId = this.route.snapshot.params['evaluacionId'];
    console.log(this.evaluacionId);
    this.cargarPreguntas();
  }

  obtenerEstudiante() {
    this.estudianteService
      .obtenerEstudianteUsername({
        username: this.loginService.getUsuario().username,
      })
      .subscribe((data: any) => {
        this.estudiante = data;
        console.log(this.estudiante);
      });
  }

  cargarPreguntas() {
    this.preguntaService
      .listarPreguntasDeLaEvaluacionParaRendir(this.evaluacionId)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.preguntas = data;
          this.timer = this.preguntas.length * 2 * 60;

          this.preguntas.forEach((p: any) => {
            p['respuestaEstudiante'] = '';
          });
          this.iniciarTemporizador();
        },
        (error: any) => {
          console.log(error);
          swal(
            'Error',
            'Error al cargar las preguntas de la evaluación.',
            'error'
          );
        }
      );

    this.evaluacionService
      .obtenerEvaluacion(this.evaluacionId)
      .subscribe((data: any) => {
        this.evaluacion_categoria = data.categoria.titulo;
        console.log(this.evaluacion_categoria);
        if (data.categoria.titulo == 'Prueba') {
          this.esPrueba = true;
          console.log(this.evaluacion_categoria);
          console.log(this.esPrueba);

          console.log(this.esPrueba == true ? 'Si es' : 'No es'); // Mover aquí el console.log
        }

        console.log(this.esPrueba == true ? 'Si es' : 'No es'); // Mover aquí el console.log
      });
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
    if (this.evaluacion_categoria == 'Prueba') {
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
    } else {
      this.preguntaService
        .evaluarCuestionario(this.preguntas)
        .subscribe((data: any) => {
          console.log(data);
          this.vocacion = data;
          this.esEnviado = true;
        });
    }
  }

  guardarPruebaEstudiante() {
    let prueba = {
      puntaje_obtenido: this.puntosConseguidos,
      estudiante: {
        dni: this.estudiante.dni,
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

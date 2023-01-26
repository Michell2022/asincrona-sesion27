import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'testing';
  valor1!: number;
  valor2!: number;
  operacion: string = "Eliga la operación";
  resultado!: number;
  error = "";


  // SEGUNDA OPCION USANDO SWITCH
  ejecutarOperacion(): void {
    this.error = "";
    switch (this.operacion) {
      case "suma": this.resultado = this.valor1 + this.valor2;
        break;
      case "resta": this.resultado = this.valor1 - this.valor2;
        break;
      case "division": this.resultado = this.valor1 / this.valor2;
        break;  
      case "multiplicacion": this.resultado = this.valor1 * this.valor2;
        break; 
      default:
        this.error = "Debe seleccionar una operación";
        break;
    }


    if(this.valor1 == null || this.valor2 == null){
      this.error = "Debe ingresar datos validos";
    }

      //PRIMERA OPCION USANDO ESTRUCTURA CONDICIONAL ANIDADA.
      
    // if (this.operacion == "suma") {
    //   this.resultado = this.valor1 + this.valor2;
    // } else if (this.operacion == "resta") {
    //   this.resultado = this.valor1 - this.valor2;
    // } else if (this.operacion == "division") {
    //   this.resultado = this.valor1 / this.valor2;
    // } else if (this.operacion == "multiplicacion") {
    //   this.resultado = this.valor1 * this.valor2;
    // }
  }

}

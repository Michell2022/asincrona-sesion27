import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  valor1!:number;
  valor2!:number;
  operacion!: string;
  resultado: number = 0;


  //PODRIA MEJORARSE USANDO SWTCH
  ejecutarOperacion(): void {
    if (this.operacion == "suma") {
      this.resultado = this.valor1 + this.valor2;
    } else if (this.operacion == "resta") {
      this.resultado = this.valor1 - this.valor2;
    } else if (this.operacion == "division") {
      this.resultado = this.valor1 / this.valor2;
    } else if (this.operacion == "multiplicacion") {
      this.resultado = this.valor1 * this.valor2;
    }
  }

}

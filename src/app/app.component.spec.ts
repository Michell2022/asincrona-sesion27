import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('testing');
  });

  // SI LA OPCIÓN SELECCIONADA ES SUMA.
  it('should sumar dos números si la opción seleccionada es suma, ejecutarOperacion()', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.operacion = 'suma';
    app.valor1 = 10;
    app.valor2 = 4;
    app.ejecutarOperacion();
    expect(app.resultado).toEqual(14);
  });

  // SI LA OPCIÓN SELECCIONADA ES RESTA.
  it('should restar dos números si la opción seleccionada es resta, ejecutarOperacion()', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.operacion = 'resta';
    app.valor1 = 10;
    app.valor2 = 4;
    app.ejecutarOperacion();
    expect(app.resultado).toEqual(6);
  });

    // SI LA OPCIÓN SELECCIONADA ES DIVISIÓN.
  it('should dividir dos números si la opción seleccionada es división, ejecutarOperacion()', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.operacion = 'division';
    app.valor1 = 10;
    app.valor2 = 5;
    app.ejecutarOperacion();
    expect(app.resultado).toEqual(2);
  });

    // SI LA OPCIÓN SELECCIONADA ES MULTIPLICACIÓN.
  it('should multiplicar dos números si la opción seleccionada es multiplicación, ejecutarOperacion()', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.operacion = 'multiplicacion';
    app.valor1 = 10;
    app.valor2 = 5;
    app.ejecutarOperacion();
    expect(app.resultado).toEqual(50);
  });
});

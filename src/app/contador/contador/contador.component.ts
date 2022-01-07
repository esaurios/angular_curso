import { Component } from "@angular/core";   

@Component({
    selector: 'app-contador',
    template: `
        <h2>{{ title }}</h2>

        <h2>La base es: {{ base }} </h2>

        <!-- <button (click)="numero = numero + 1"> + 1 </button> -->
        <!-- <button (click)="sumar()"> + 5 </button> -->
        <button (click)="acumular(base)"> +  {{ base }}  </button>

        <span> {{ numero }} </span>

        <!-- <button (click)="numero = numero - 1"> - 1 </button> -->
        <!-- <button (click)="restar()"> - 5 </button> -->

        <button (click)="acumular(-base)"> -  {{ base }}  </button>
    `
})

export class ContadorComponent {
    title = 'Contador de App';
    numero: number = 10;
    base: number = 5;

    acumular( valor : number ) {
        this.numero += valor;
    }

    sumar() {
        this.numero += 5;
    }

    restar() {
        this.numero -= 5;
    }
}  


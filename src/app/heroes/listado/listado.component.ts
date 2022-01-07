import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent {

    heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Cap. America'];
    posicion: number = this.heroes.length;
    heroeBorrado: string = '';

    borrarHeroe() {    
      const heroeBorrado = this.heroes.shift();  // borra el primer elemento
      // this.heroes.pop();  // borra el ultimo elemento

      console.log('Héroe borrando....', heroeBorrado);      

      this.heroeBorrado =  heroeBorrado || '';

// Tambien puede hacerse de la siguiente forma 
//this.heroeBorrado = this.heroes.shift() || ''; 




    }   

}

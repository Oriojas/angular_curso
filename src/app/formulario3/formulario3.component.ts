import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.css']
})
export class Formulario3Component {

  // para sincronizar el valor con el front
  name = new FormControl("Ingrese su nombre");  
  email = new FormControl("Ingrese su email");

}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.css']
})
export class Formulario3Component {

  get name(){
    return this.formUser.get('name') as FormControl; // as FormControl para no colocar le ?. en el html
  }

  get email (){
    return this.formUser.get('email') as FormControl;
  }

  formUser = new FormGroup({
      // para sincronizar el valor con el front
    'name': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email]),

  });

  procesar (){
    console.log(this.formUser.value);
  }

}

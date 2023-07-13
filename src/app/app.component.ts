import { Component } from '@angular/core'; // decorador

@Component({
  selector: 'app-root', // para llamar al componente
  templateUrl: './app.component.html', // html directamente se cambia la propiedad por "template"
  styleUrls: ['./app.component.css'] // css directamente se cambia la propiedad por "style"
})
export class AppComponent {
  title = 'angular_curso';
}

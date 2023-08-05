import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent {
  @Input() title: string = ""; // así se pasa un elemento del componente padre al componente hijo
}

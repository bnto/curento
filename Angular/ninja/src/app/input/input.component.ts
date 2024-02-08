import { Component } from '@angular/core';
import { InputListComponent } from './input-list/input-list.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [InputListComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

}

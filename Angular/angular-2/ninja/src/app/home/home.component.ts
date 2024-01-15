import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {
  @Input() ninja: any

  @Output() onAlertMe = new EventEmitter()

  fireAlertMeEvent(){
    this.onAlertMe.emit();
  }
}

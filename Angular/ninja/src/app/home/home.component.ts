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

  title: string;
  imgSrc: string;
  name: string;

  /* or instead of doing it in the constructor:
  title: string = 'ninja';
  imgSrc: string = 'image.jpg;
  */

  constructor(){
    this.title = 'ninja';
    this.imgSrc = 'https://picsum.photos/200/300/?blur';
    this.name = '';
  }
}

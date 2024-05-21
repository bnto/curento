import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ninja } from '../../models/ninja';

@Component({
  selector: 'app-input-details',
  standalone: true,
  imports: [],
  templateUrl: './input-details.component.html',
  styleUrl: './input-details.component.css'
})
export class InputDetailsComponent {
  @Input()
  detail!: Ninja;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  handleClick(){
    this.remove.emit(this.detail);
  }
}

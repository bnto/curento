import { Component } from '@angular/core';
import { Ninja } from '../../models/ninja';
import { CommonModule } from '@angular/common';
import { InputDetailsComponent } from '../input-details/input-details.component';

@Component({
  selector: 'app-input-list',
  standalone: true,
  imports: [CommonModule, InputDetailsComponent],
  templateUrl: './input-list.component.html',
  styleUrl: './input-list.component.css'
})
export class InputListComponent {
  ninjas: Ninja[] = [
      {
        index: 1,
        name: 'Ryu',
        belt: 'black'
      },
      {
        index: 2,
        name: 'Jackie',
        belt: 'Yellow'
      },
      {
        index: 3,
        name: 'Ken',
        belt: 'Brown'
      }
    ]

    // or inside the constructor like this:
    other_ninjas: Ninja[];

    constructor(){
      this.other_ninjas = [
        {
          index: 1,
          name: 'Ryu',
          belt: 'black'
        },
        {
          index: 2,
          name: 'Jackie',
          belt: 'Yellow'
        },
        {
          index: 3,
          name: 'Ken',
          belt: 'Brown'
        }
      ]
    }

    handleRemove(e: any){
      alert(e.value)
    }
}

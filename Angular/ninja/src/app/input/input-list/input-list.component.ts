import { Component } from '@angular/core';
import { Ninja } from '../../models/ninja';
import { CommonModule } from '@angular/common';
import { InputDetailsComponent } from '../input-details/input-details.component';
import { NinjaService } from '../../ninja.service';

@Component({
  selector: 'app-input-list',
  standalone: true,
  imports: [CommonModule, InputDetailsComponent],
  templateUrl: './input-list.component.html',
  styleUrl: './input-list.component.css'
})
export class InputListComponent {

  ninjas!: Ninja[];

  some_ninjas: Ninja[] = [
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

    // or like this...
    other_ninjas: Ninja[];

    constructor(private ninjaService: NinjaService){
      // ... inside the constructor
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

      // but better through a service with dependecy injection in the constructor
      this.ninjas = this.ninjaService.getOtherNinjas();

      // or even better with an async call by subscribing to the service:
      this.ninjaService.getNinjas().subscribe((data: Ninja[]) => {
        this.ninjas = data;
      })
    }

    handleRemove(event: Ninja){
      this.ninjas = this.ninjas.filter((ninja: Ninja) => {
        return ninja.index != event.index
      })
    }
}

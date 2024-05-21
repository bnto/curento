import { Component } from '@angular/core';
import { Ninja } from '../models/ninja';
import { NinjaService } from '../ninja.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ninja-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ninja-form.component.html',
  styleUrl: './ninja-form.component.css'
})
export class NinjaFormComponent {
  // ninja: Ninja = {
  //   name: 'Ryu',
  //   belt: 'Red',
  //   index: 1,
  // }

  ninja!: Ninja;
  ninjas!: Ninja[];

  constructor(private ninjaService: NinjaService) {
    // this.ninja = {
    //   name: 'Ruyy',
    //   belt: 'Red',
    //   index: 1
    // }
    this.ninjaService.getNinja(2).subscribe((data: Ninja) => {
      this.ninja = data;
    })

    this.ninjaService.getNinjas().subscribe((data: Ninja[]) => {
      this.ninjas = data;
    })
  }

  handleClick(id: number) {
    console.log(id)
  }


}

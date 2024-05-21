import { Component } from '@angular/core';
import { Ninja, NinjaBeltColor } from '../models/ninja';
import { NinjaService } from '../ninja.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  ninjas!: Ninja[];
  ninja!: Ninja & { certified: boolean, email: string };

  colors: NinjaBeltColor[] = [
    {
      key: 0,
      value: 'Yellow'
    },
    {
      key: 1,
      value: 'Black'
    },
    {
      key: 2,
      value: 'Brown'
    },
    {
      key: 3,
      value: 'White'
    }
  ]

  constructor(private ninja_service: NinjaService) {
    this.ninja_service.getNinjas().subscribe( (data: Ninja[]) => {
      this.ninjas = data;
    })
    this.ninja = {
      id: 5,
      name: 'okey',
      belt: 'yellow',
      certified: false,
      email: '',
    }
  }

  handleModelChange(e: string){
    // Using (ngModelChange) event
    console.log(e)
  }

  handleChange(e: Event){
    // Using (change) event
    console.log(e)
    let target = e.target as HTMLInputElement;
    console.log(target.value)
  }

  handleSubmit(formvalues: Ninja) {
    console.log(formvalues);
    console.log(`%c ${formvalues.name} `, `color: white; background-color: hotpink`);
    alert(JSON.stringify(formvalues));
  }
}

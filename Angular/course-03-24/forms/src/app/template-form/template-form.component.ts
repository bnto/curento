import { Component } from '@angular/core';
import { Ninja } from '../models/ninja';
import { NinjaService } from '../ninja.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  ninjas!: Ninja[];

  constructor(private ninja_service: NinjaService) {
    this.ninja_service.getNinjas().subscribe( (data: Ninja[]) => {
      this.ninjas = data;
    })
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'ninja';
  // ninja = {
  //   name: 'Ryu',
  //   belt: 'Black',
  // }
  ninja: {name: string, belt: string };

  constructor(){
    this.ninja = {
      name: 'Ryu',
      belt: 'Black',
    }
  }
  alertMe(){
    alert(this.ninja.name)
  }
}

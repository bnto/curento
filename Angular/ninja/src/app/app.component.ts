import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './input/input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, RouterLink, InputComponent],
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

  name: string = "";

  constructor(){
    this.ninja = {
      name: 'Ryu',
      belt: 'Black',
    }
  }
  alertMe(){
    alert(this.ninja.name)
  }

  handleChange(e: any){
    this.name = e.target.value;
    console.log(e);
  }

  ngOnInit() :void {
    console.log('fired')
  }
}

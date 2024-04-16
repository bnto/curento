import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('ref_variable') variableRef!: ElementRef;
  constructor(private ref_variable: ElementRef){
    this.ref_variable.nativeElement.innerText = 'Hello';
    this.ref_variable.nativeElement.style.color = 'red';
    console.log(this.ref_variable)
  }
}

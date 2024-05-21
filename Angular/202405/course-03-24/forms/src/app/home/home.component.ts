import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { HighlightDirective } from '../_directives/highlight.directive';
import { CustomifDirective } from '../_directives/customif.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HighlightDirective, CustomifDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // @ViewChild('ref_variable') variableRef!: ElementRef;
  constructor(private ref_variable: ElementRef, private renderer: Renderer2){
    this.ref_variable.nativeElement.innerText = 'Hello';
    this.ref_variable.nativeElement.style.color = 'red';
    console.log(this.ref_variable)

    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Hello Renderer2');
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.ref_variable.nativeElement, div);
  }
}

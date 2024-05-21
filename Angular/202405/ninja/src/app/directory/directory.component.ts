import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Ninjas {
  name: string,
  belt: string,
} // interfaces: helps with logical type checking

@Component({
  selector: 'app-directory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directory.component.html',
  styleUrl: './directory.component.css'
})
export class DirectoryComponent {
  ninja: string;
  ninjas: Array<{ name: string, belt: string }>; // or use interface like below
  ninjasInterface: Ninjas[];

  addthisclassIsTrue: boolean = true;

  constructor(route: ActivatedRoute){
    this.ninja = route.snapshot.params['ninja'];

    this.ninjas = [
      { name: 'Yoshi', belt: 'black' },
      { name: 'Ruy', belt: 'red' },
      { name: 'Crystal', belt: 'purple' },
    ]
    this.ninjasInterface = [
      { name: 'Yoshi', belt: 'black' },
      { name: 'Ruy', belt: 'red' },
      { name: 'Crystal', belt: 'purple' },
    ]
  }
  handleClick(element: any){
    alert(element.value)
    console.log(element)
  }
  remove(){
    alert()
  }
}

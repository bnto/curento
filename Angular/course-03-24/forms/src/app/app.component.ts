import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';

interface Nav {
  href: string,
  name: string,
  exact: boolean,
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TemplateFormComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms';

  nav: Nav[] = [
    {
      href: '/',
      name: 'Index',
      exact: true,
    },
    {
      href: 'home',
      name: 'Home',
      exact: true,
    }
  ]
}

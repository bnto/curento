import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomif]',
  standalone: true
})
export class CustomifDirective {

  customif: boolean = true;

  constructor(private template: TemplateRef<any>, private vcr: ViewContainerRef) {
    if(this.customif) {
      this.vcr.createEmbeddedView(this.template);
    } else {
      this.vcr.clear();
    }
  }

}

// This customif custom directive is be a structural directive

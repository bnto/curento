
angular
- ngContent ? & template reference variable #variable ?
- @ViewChild / @ViewChildren ? (similar to js querySelector)
- ElementRef ?


@ViewChild: takes element ...
```ts
@ViewChild('variable') variable!: ElementRef // note: this doesn't seem to do anything?
```

...out of the dom ...

```html
<div #variable></div>
```
... so you can access it in the .ts file ...

```ts
this.variable.nativeElement.innerText = 'Hello';
```

... but Renderer2 is a more safe way to do it
```ts
const div = this.renderer.createElement('div')
const text = this.renderer.createText('Hello');
this.renderer.appendChild(div, text);
this.renderer.appendChild(this.variable.nativeElement, div);
```

ngContainer / ngTemplate / ngContent

- helps grouping elements in angular

```<ng-container *ngIf></ng-container>```
- used when you don't want to use a <div>
- can be used with directives like *ngIf

```<ng-template [ngIf]="true"></ng-template>```
- similar to regular html templates, will not show the content until you display it with js
- not used anymore

```<ng-content></ng-content>```
```<app-details><h1></h1></app-details>```
- used for content projection


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

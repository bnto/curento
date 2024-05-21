# Input & Output

## Pass data down the component

```html
<app-input [input]="data"></app-input>
```

in ```input.component.ts```:

```ts
@Input
input!: type;
```

in ```input.component.html```:
```html
<h1>{{ input }}</h1>
```

## Pass event up the component

```html
<button (click)="handleClick()"></button>
```

in ```input.component.ts```:

```ts
@Output()
action: EventEmitter<any> = new EventEmitter();

handleClick(){
    this.action.emit(this.input);
}
```

```html
<app-input (action)="handleAction($event)"></app-input>
```

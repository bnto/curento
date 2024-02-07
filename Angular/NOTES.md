```javascript
// Classes

class Car {
    // properties
    wheels: number = 4
    speed: number

    // construction function: pass data to the class
    constructor(mph: number){
        this.speed = mph
    }

    // methods
    drive: any = function(){
        console.log(this.speed)
    }
}

interface Car {
    wheels: number,
    speed: number
}

const myCar: Car = new Car(70); // new instance of the Car class


/*
RxJS
Observables are a functional way to deal with asynchronous subroutines. Promises are the imperative way to deal with them.

*/

/*
Decorators allows adding metadata or behavior to classes, methods, and properties
*/

/*
Angular
Directives
<app-home></app-home>

import { HomeComponent } from './path'
@Component({
    directives: [HomeComponent]
});

ng-content Directive: display content that is inside the directive
<app-home>content</app-home> directive
home.component.html
<ng-content></ng-content> will display 'content'

*/

```

Angular data flow (into the view)
- string interpolation {{ name }}
- property binding <input [required]="expression">

Angular data flow (out of the view)
- event binding <button (click)="expression/function"> component class can handle the event
- custom event <app-home (update)="function"></app-home>

Angular data flow (both ways)
- two way binding <input [(ngModel)]="model/object">
    - updates the model/object in the component class
    - updates any reference to the model/object in the view/template {{ model}}
ngModel ! import FormsModule

property binding
- native html property [value]="expression" or value="{{ expression }}"
- build-in angular property [ngClass]="expression"
- custom made property [myProp]="expression"

- @Input decorator & custom property binding
(pass data from one component to another)
app.component.ts :
ninja = {
    name: 'Ryu',
    belt: 'Black'
}
<app-home [ninja]></app-home>

home.component.ts :
@Input() ninja;

- @Output decorator & Custom event binding
(pass event from one component to another)
app.component.ts
<app-home (onYell)="yell($event)"></app-home>
yell(e){ // do something }

home.component.ts
@Output() onYell = new EventEmitter();

fireYellEvent(e){
    this.onYell.emit(e);
}

home.component.html
<button (click)="fireYellEvent($event)">



ROUTING angular
- create a route file (app.routes.ts)
- tell angular what component to load for said route

router links:
<a [routerLink]="['/']">Home</a>


### Directives
Directives are instructions which tell angular to do something
```<router-outlet></router-outlet>```
```[routerLink]=""```

#### attribute directives (ngClass)
```<p [ngClass]=""></p>```

#### structural directives (ngIf)
```<p *ngIf=""></p>```
```*ngFor```


### Property binding

```component.ts``` or Class
```ts
title: string = 'app'
imgSrc: string = 'image.jpg'
```

```component.html``` or template
```html
<h1 [innerHtml]="title"></h1>
<img [src]="imgSrc"></h1>
```

### 2 way binding

The banana box:

```([])```

Property binding ```[]```
Event binding ```()```

1. sets a property in the code
2. listens for DOM element change

For inputs:
```ngModel``` & import ```FormModule```

in ```component.ts```
```typescript
favoriteAnimal: string = "turle";
```

in ```component.html```
```html
<input [(ngModel)]="favoriteAnimal" />
```

### Template reference variable
```html
<input #phone placeholder="phone number" />
<button type="button" (click)="callPhone(phone.value)">Call</button>
```

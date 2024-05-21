# template driven forms

2 types of forms in Angular:

Template (simple) & Reactive (scalable)


## Build

Html & Model

## Bind

```ngModel``` for data binding

```ngForm``` for template

example

```html
<form #form="ngForm">
    <input [ngModel]="modelName.property" name="property" />
</form>
```

## Track

Validation

## Submit

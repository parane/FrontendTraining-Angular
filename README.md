# Angular Concept
## prerequisite
>Intial setup in master branch

## Working with arrays and ngfor

Adding collection of object. using ngFor, loop through and display it. 

define Any Object array in app.component.ts.
```
cricketers:  Array<any> = [{},{}]
```
loop through in html using *ngFor
```
<li *ngFor="let cricketer of cricketers"> {{cricketer.name}}</li>
```

*ngFor syntax says we want to use the NgFor directive on this attribute. it marks that  element (and its children) as the "repeater template".

```
<li *ngFor="let cricketer of cricketers; let i = index"> {{i}}{{cricketer.name}}</li>
```

trackBy feature from Angular 1.x that allows performance improvements when populating list of object.Angular has no information about the cricketer object. if we create new object with exactly same name and type object, angular treat that new object. so avoid that situation. you can use trackBy.


```
<li *ngFor="let cricketer of cricketers; let i = index;  trackBy: trackByFn"> {{i}}{{cricketer.name}}</li>

//component
 trackByFn(index, cricketer) {
  console.log(cricketer);
  return cricketer.name;
}
```

## Working with ngif

ngIf fileter out the list, only batsman.
```
// current - invalid
<li *ngFor="let cricketer of cricketers" *ngIf="cricketer.type == 'batsman'"> {{cricketer.name}}</li>

```
### Is it working ?
>throw error "Can't have multiple template bindings on one element. Use only one attribute named 'template' or prefixed with *" ....[ref](https://github.com/angular/angular/issues/4792) 

### reason ?
*ngIf, *ngFor manuplate the dom element. so they have stopped that in angular 2 ( may be performance issue). 

### how can we make this work ?

1. ng-container
This is a logical container that can be used to group nodes but is not rendered in the DOM tree as a node.
```
<ng-container *ngFor="let cricketer of cricketers" >
 <li *ngIf="cricketer.type == 'batsman'" >{{cricketer.name}}</li>
</ng-container>
```

2. template
new Angular template syntax with the template tag. This is also called a structural Directive. It is helpful to know that * is just a shorthand to explicitly defining the data bindings on a template tag. The template tag prevents the browser from reading or executing the code within it.

```
<template  ngFor let-cricketer [ngForOf]="cricketers">
   <li *ngIf="cricketer.type == 'batsman'" >{{cricketer.name}}</li>
</template>
```

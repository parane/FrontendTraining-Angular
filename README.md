# Angular Concept 2 - two way binding
## prerequisite
>Intial setup in master branch

## Working with ngModel [ref]
(https://blog.thoughtram.io/angular/2016/10/13/two-way-data-binding-in-angular-2.html)

### Creating simple two-way data bindings 

Two way binding means Changes in the application state have been automagically reflected into the view and vise-versa.it can be acheived using ngModel.

```
<input [(ngModel)]="username">
<p>Hello {{username}}!</p>
```
It [()]- called “Banana in a box” can be cut down  to property binding [] (box) and event binding () (Banana)
Same as

```
<input [value]="username" (input)="username = $event.target.value">
<p>Hello {{username}}!</p>
```

 The property binding [ngModel] takes care of updating the underlying input DOM element. The event binding (ngModelChange) notifies the outside world when there was a change in the DOM.

### Creating custom two-way data bindings 

simple counter. 
```
 //in ts
 increment(){
  
    this.counter += 1
  }
//in html
<h2>
<p>counter : {{counter}} !</p>
<button (click)="increment()">Add</button>
</h2>
```

It has an internal counter property that is used to display the current counter value. you can use this within component html. 

 To create your own component that supports two-way binding, you must define an @Output property to match an @Input, but suffix it with the Change. This is needed when you are sending to different component. Lets go deep into next section

```
  //this is the sample (not in code base)
  @Output() counterChange = new EventEmitter();
 set counter(val) {
    this.counterValue = val;
    this.counterChange.emit(this.counterValue);
  }

```

so Lets change some property value using two way binding. 
scenario 1: we have heading, select box different color. and we have to change heading color property value by selection of color in select box.

 ```
<h1 class="c" > Change color </h1>
 <select [(ngModel)]="c">
       <option value="pink">Pink</option>
       <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
   </select>
```

>note class value are in css
 
 
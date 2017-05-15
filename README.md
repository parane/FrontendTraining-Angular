# Angular Concept 3 - Component
## prerequisite
>Intial setup in master branch

## Intro To Component
Components are the most basic building block of an UI in an Angular application. An Angular application is a tree of Angular components. Angular components are a subset of directives. components always have a template (html).The component contains two important things; one is view and another one is some logic.


## creating component using Angular-cli

```
ng g component tab1
```

## creating component manually

1.create folder name tab2 within app and create .css, .html, .ts file

2. adding tab2 decleartion in app.module.ts

```
  declarations: [
    AppComponent,
    Tab1Component,
    Tab2Component,
  ]
```
## Check those component are working in main component html

```
<app-tab1></app-tab1>
<app-tab2></app-tab2>
<h1>
hello
</h1>
```
## Lets do the change tab by clicking button 

using [()] 
app.component.html
```
<button (click)="changeTab('Tab1')"> Tab1 </button>
<button  (click)="changeTab('Tab2')"> Tab2  </button>
<app-tab1 [hidden]= "activeTab !==  'Tab1'"></app-tab1>
<app-tab2 [hidden]= "activeTab !==  'Tab2'"></app-tab2>
```

app.component.ts

```
  activeTab = "Tab1"

  changeTab(tabName:string){
    console.log(tabName)
    this.activeTab = tabName
  }
```
note: it is just hide child component in parent component.

adding some stylish to button.it took from bootstrap. 

```
class="btn btn-info"
```

so can we dynamically change the css using ngclass. 


## data sending between components using Input and event emitter.

![alt text](https://themarketingtechnologist-ghost.s3.amazonaws.com/2016/May/nested-1463921912326.png)


### Input (parent to child) [ref](https://www.infragistics.com/community/blogs/dhananjay_kumar/archive/2016/12/13/communication-between-components-using-input-in-angular-2.aspx)
Let us start with passing data from the parent component to the child component. This can be done using the input property. @Input decorator or input properties are used to pass data from parent to child component. To do this, we’ll need to modify child AppChildComponent as shown in the listing below

tab1.component.ts (child)
```
  @Input() receivedByChild: String
``` 
Next, let us modify the parent component AppComponent to pass data to the child component.
app.component.html (parent)

```
<app-tab1>[receivedByChild] = "sendDataFromParent" ></app-tab1>
``` 

>Intercept input from parent component in child component using get and set.

### Output/Event (child to parent) [ref](https://www.themarketingtechnologist.co/building-nested-components-in-angular-2/)

The child component exposes an event it can use to pass output to its parent using the @Output decorator.

Like with the @Input decorator, we can use the @Output decorator to decorate any property of the child components class. However, the property type must be an event. The only way a child component can pass data back to its parent, is with an event :

So let's start by creating a new instance of an Event Emitter and decorate the property with the @Output decorator.

```
  @Output() btnClickEmit = new EventEmitter();
``` 

ow we've got an event emitter in place, let's use the notify event property and call its emit method to raise the notify event and pass in our payload as an argument.

```
this.btnClickEmit.emit("Hi from child");
``` 

The parent component receives that event and its payload. We use event binding to bind to this emit event and call a method.

```
<app-tab1 (btnClickEmit)="handleEmit($event)"  ></app-tab1>
``` 
We have to pass the $event to the handler because that variable holds the event payload.

Our final step is to provide the handleEmit method to execute when the click event occurs in child. Since the event payload is a string, the handleEmit function takes in a string. We can perform any desired action in our handler, but for now let's just console the payload.


```
handleEmit(value) {
    console.log('Parent function excuted with ', value);
    this.anyMessageFromChild = value
    
  }
```
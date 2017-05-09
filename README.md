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



## data sending between components using event emitter.


 

# Angular Concept 2 - two way binding
## prerequisite
>Intial setup in master branch

## Working with ngModel
Two way binding means Changes in the application state have been automagically reflected into the view and vise-versa.it can be acheived using ngModel.

```
<input [(ngModel)]="username">
<p>Hello {{username}}!</p>
```
It [()] can be cut down  to property binding [] and event binding ()
Same as

```
<input [value]="username" (input)="username = $event.target.value">
<p>Hello {{username}}!</p>
```


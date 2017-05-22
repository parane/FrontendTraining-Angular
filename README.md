# Angular Concept 4 - Forms
## prerequisite
>Intial setup in master branch

## Intro To Forms
Forms are the mainstay of business applications. 

Basic Building blocks of Forms
It contains Form control, form group and form array.

![alt text](http://i.imgur.com/v53aSkJ.png)

### form control :
![alt text](http://i.imgur.com/ZQSJvh2.png)
![alt text](http://i.imgur.com/sSXF90I.png)

### form group :
This is the form controll collection. eg address form group has collection of door no, street and city form control.

### form array :
![alt text](http://i.imgur.com/MsCGgrK.png)

It came up with two way to implement the form : 

![alt text](http://i.imgur.com/BtvP7dh.png)


## 1. Template-driven Way/Angular 1 way
Angular 1 tackles forms via the famous ng-model directive

The instantaneous two-way data binding of ng-model in Angular 1 is really a life-saver as it allows to transparently keep in sync a form with a view model.

Forms built with this directive can only be tested in an end to end test because this requires the presence of a DOM, but still this mechanism is very useful and simple.

Angular now provides an identical mechanism named also ngModel, that allow us to build what is now called Template-Driven forms. 

### Advantages and disadvantages of Template driven
There is nothing wrong with template driven forms, but from a programming technique point of view bi-directional binding is a solution that promotes mutability.

Each form has a state that can be updated by many different interactions and its up to the application developer to manage that state and prevent it from getting corrupted. This can get hard to do for very large forms and can introduce a category of potential bugs.

Again its important to realize that this only happens in very large / complex forms. Angular does provides a different alternative for managing forms, so let's go through it.



## 2. Reactive (or model-driven) way



## creating login component in forms

it contian simple html form elements without any form control.
 
```
 ng g c forms/login
```

## Let create registration form components in two flavour

```
ng g c forms/template-driven/registerTemp
```

```
ng g c forms/model-driven/registerModel
```

add routing for each registration form


##  create html registration form with uname,email, password for both type

```
<div class="container">
  <h1>Template Driven Registration Form</h1>
  <form>
    <div>
      <div>
        <label for="username">Username</label>
        <input type="text" class="form-control" id="username" >
      </div>
      <div >
        <label for="email">E-Mail</label>
        <input type="text" class="form-control" id="email">
        <div >
          <span > not a valid email</span>
          <span > Email Required</span>
        </div>
      </div>
    </div>

    <div>
      <label for="password">Password</label>
      <input type="password" class="form-control" id="password" >
    </div>
   <div class="radio" >
      <label>Would you like to receive a newsletter? </label>
      <label><input type="radio" value="yes" name="newsletter">yes</label>
      <label><input type="radio" value="no" name="newsletter">no</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
```

##  lets start with reactive forms.

import ReactiveFormsModule in module
```
 imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    ReactiveFormsModule
  ]
```


adding form group with each form element controller:

```
  myForm: FormGroup;

  constructor(formBuilder: FormBuilder) {

      this.myForm = formBuilder.group({
      'username': '',
      'email': '',
      'password': '',
      'newsletter':''
      });

   }
```

##  setting up the view

adding [formGroup] and formControlName="username" for each form element in html
```

  <form [formGroup]="myForm">
    <div>
      <div class="form-group">
        <input type="text" class="form-control" id="username" formControlName="username">
```

and access the form

```
http://localhost:4200/model
```
# Angular Setup
## prerequisite
>Install node Optional Visual studio code Editor

## Introduction to Angular
>Angular is a development platform for building mobile and desktop web applications using Typescript/JavaScript (JS). AngularJS is privious version of Angular. 

## Step 1 : Install Angular CLI
One of the easiest ways to start a new Angular 2 application is to use Angular’s command-line interface (CLI).

```
 npm install -g @angular/cli
```

>which will install the ng command globally on your system.To verify whether your installation completed successfully ```ng version```

## Step 2 : Creating a New Angular Application
```
ng init
```
It will be created directory structure,testing and typscript configuration are done in behind the scene.

>using ng (based on emberjs), you can do Development server (`ng serve`),Code scaffolding (`ng generate component component-name`),Build (`ng build`), Running unit tests(`ng test`) end-to-end tests(`ng e2e`)

e2e- End to end testing
node_modules - all npm dependencies
app- commponts. mostly we are working on here.
environments- Works with environment configurations
angular-cli.json -Allows you to change the default settings of the CLI.
karma.conf.js/protractor.conf.js - for testing

## Step 3 : Running Your Application
```
ng serve
```

It will be run the dev server with auto refresh

>[behind the scene](https://github.com/ember-cli/ember-cli/blob/master/lib/commands/serve.js)

## Step 4 : Introduction to Component
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}

```
Notice that the structure of this import is of the format import { things } from wherever . In the{ things } part what we are doing is called destructuring. Destructuring is a feature provided ES6. 

That is the idea behind components: we teach the browser new tags that have new functionality. eg <app-root> is browser. Those component is defined in src -> app -> app.component.ts. This is the typedscript. This has two basic concept ?

1. Component annotation
2. Component definition class

Annotation is just meta data added to your code like in java annotation. The selector property here indicates which DOM element this component is going to use. This way if we have any app-root></app-root>tag within a template, it will be compiled using this Component class. Component is contain html and css as well as define in templateUrl and styleUrls.

### Step 4.1 : Adding Data to the Component (Binding)
```
 title = 'app works!';
```

Template Variable in html to catch those data.
```
{{ name }}
```
# webpack Dev server integration
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

## Step 3 : Running Your Application
```
ng serve
```

It will be run the dev server with auto refresh

>(behind the scene)[https://github.com/ember-cli/ember-cli/blob/master/lib/commands/serve.js]
# Angular Concept 5 - Routing
## prerequisite
>Intial setup in master branch

## Intro To Routing



## creating component in routing_page directive

```
 ng g c routing_page/home
```

## creating file app.routing.ts in app 
All routing are handle by here

```
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/routing_page/home/home.component";

const APP_ROUTES: Routes = [
 
    {
        path: 'home',
        component: HomeComponent
    }
];


export const Routing = RouterModule.forRoot(APP_ROUTES);
```

## import Routing to app.module.ts
```
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
```

## Adding <router-outlet></router-outlet> to main html
within router-outlet, home app componet will be replace by routing 

```
<router-outlet></router-outlet>
```

if u go to localhost:4200/home ,  'home work' html placed within router-outlet

# Angular Concept 5 - Routing
## prerequisite
>Intial setup in master branch

## Intro To Routing
The Angular Router enables navigation from one view to the next as users perform application tasks.


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

## Adding router-outlet to main html
within router-outlet, home app componet will be replace by routing 

```
<router-outlet></router-outlet>
```

if u go to localhost:4200/home ,  'home work' html placed within router-outlet

instead of manually going to the localhost:4200/home, crate home router link as following:
```
<a routerLink="/home">go to home</a>
```

## Adding Guard to routing

So priviously we can access routes without any restriction. Protecting routes is a very common task when building applications, as we want to prevent our users from accessing areas that they’re not allowed to access, or, we might want to ask them for confirmation when leaving a certain area (unsaved form details). Angular’s router provides a feature called Navigation Guards that try to solve exactly that problem.


1. CanActivate - Decides if a route can be activated
example activate guard that checks whether the user is logged in when home link click:

login.guards.ts :
```
@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router: Router) {

    }

     canActivate() {
        if (confirm('are you login?')) {
            // this.router.navigate(['/', 'login']);
            return true;

        }
        return false;
    }

}
```

lets guard homerouting :
```
 canActivate: [LoginGuard],
```

define it in provider 
```
 providers: [
    LoginGuard
  ]
```

2. CanDeactivate - Decides if a route can be deactivated
CanDeactivate works in a similar way to CanActivate but there are some important differences. The canDeactivate function passes the component being deactivated as an argument to the function:
example activate guard that checks whether the user is unsaved changes:




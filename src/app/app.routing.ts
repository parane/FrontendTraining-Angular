import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/routing_page/home/home.component";
import { LoginGuard } from "app/shared/guards/login.guard";
import { LoginComponent } from "app/forms/login/login.component";

const APP_ROUTES: Routes = [
 
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [LoginGuard],
    },
    {
        path: 'login',
        component: LoginComponent
    }
];


export const Routing = RouterModule.forRoot(APP_ROUTES);
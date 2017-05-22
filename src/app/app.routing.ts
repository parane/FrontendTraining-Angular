import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/routing_page/home/home.component";
import { LoginGuard } from "app/shared/guards/login.guard";
import { LoginComponent } from "app/forms/login/login.component";
import { RegisterTempComponent } from "app/forms/template-driven/register-temp/register-temp.component";
import { RegisterModelComponent } from "app/forms/model-driven/register-model/register-model.component";

const APP_ROUTES: Routes = [
 
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [LoginGuard],
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'model',
        component: RegisterModelComponent
    },
    {
        path: 'temp',
        component: RegisterTempComponent
    }
];


export const Routing = RouterModule.forRoot(APP_ROUTES);
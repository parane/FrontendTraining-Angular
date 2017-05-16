import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/routing_page/home/home.component";

const APP_ROUTES: Routes = [
 
    {
        path: 'home',
        component: HomeComponent
    }
];


export const Routing = RouterModule.forRoot(APP_ROUTES);
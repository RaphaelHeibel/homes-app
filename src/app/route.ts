import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { routes } from './app.routes';
import { DetailsComponent } from "./details/details.component";

const routeConfig: Routes = [
  {
    path:'',
    component: HomeComponent,
    title: 'Home Page'
  },
  {
    path:'details/:id',
    component: DetailsComponent,
    title: 'Details Page'
  }
];

export default routeConfig;



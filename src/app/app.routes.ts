import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Countries } from './countries/countries';
import { Country } from './country/country';
import { About } from './about/about';


export const routes: Routes = [
    {path: '', component: Home},
    {path: 'countries', component: Countries},
    {path: 'country/:code', component: Country},
    {path: 'about', component: About},

];

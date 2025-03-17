import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {   path: '', component: HomeComponent },
    {   path: 'about', component: AboutComponent },
    {   path: 'contact', component: ContactComponent },
    {   path: '**', redirectTo: '' }
];

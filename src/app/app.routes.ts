import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsServicesComponent } from './components/terms-services/terms-services.component';

export const routes: Routes = [
    {   path: '', component: HomeComponent },
    {   path: 'about', component: AboutComponent },
    {   path: 'contact', component: ContactComponent },
    {   path: 'privacy&policy', component: PrivacyPolicyComponent },
    {   path: 'termsAndConditions', component: TermsServicesComponent },
    {   path: '**', redirectTo: '' }
];

import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsServicesComponent } from './components/terms-services/terms-services.component';
import { ServicesComponent } from './components/services/services.component';
import { FormPaymentComponent } from './components/form-payment/form-payment.component';
import ResumePaymentComponent from './components/resume-payment/resume-payment.component';

export const routes: Routes = [
    {   path: '', component: HomeComponent },
    {   path: 'about', component: AboutComponent },
    {   path: 'contact', component: ContactComponent },
    {   path: 'privacy&policy', component: PrivacyPolicyComponent },
    {   path: 'termsAndConditions', component: TermsServicesComponent },
    {   path : 'services', component: ServicesComponent },
    // {   path: 'checkout', component: FormPaymentComponent },
    {   path: 'resume', component: ResumePaymentComponent },
    {   path: '**', redirectTo: '' }
];

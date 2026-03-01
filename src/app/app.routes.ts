import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { FeaturesComponent } from './pages/features/features';
import { PricingComponent } from './pages/pricing/pricing';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

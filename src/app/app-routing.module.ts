import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';

import { DataSecurityComponent } from './data-security/data-security.component';
import { CartComponent } from './cart/cart.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
 

  { path: 'data-security', component: DataSecurityComponent},
  { path: 'cart', component: CartComponent},
  { path: 'customersupport', component: CustomersupportComponent},
  { path: 'creditcard', component: CreditcardComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
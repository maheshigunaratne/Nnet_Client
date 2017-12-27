import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { DatasecuritydatacaptureComponent } from './datasecuritydatacapture/datasecuritydatacapture.component';
import { CartComponent } from './cart/cart.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';




const routes: Routes =[
    { path: 'datasecuritydatacapture',component: DatasecuritydatacaptureComponent },
    { path: 'cartscreen', component: CartComponent },
    { path: 'creditcardowner',component: CreditcardComponent },
    { path: 'customersupportmanager',component: CustomersupportComponent },
  
    { path: '',redirectTo: 'datasecuritydatacapture', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

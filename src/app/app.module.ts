import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';


import { AppRoutingModule }     from './app-routing.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';


import { DataSecurityComponent } from './data-security/data-security.component';
import { CartComponent } from './cart/cart.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {SelectModule} from 'ng2-select';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SidebarModule,
    SelectModule
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
   
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    DataSecurityComponent,
    CartComponent,
    CreditcardComponent,
    CustomersupportComponent,
    SearchBarComponent
  
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import {Routes, RouterModule} from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { BakeryComponent } from './browse/bakery/bakery.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ChocolateComponent } from './browse/chocolate/chocolate.component';
import { DairyComponent } from './browse/dairy/dairy.component';


// const appRoutes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', component: WelcomeComponent },
//   { path: 'products', component: ProductComponent },
//   { path: 'checkout', component: CheckoutComponent },
//   { path: 'login', component:LoginComponent}
// ]
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    FooterComponent,
    ProductComponent,
    CheckoutComponent,
    CategoryComponent,
    CartComponent,
    BrowseComponent,
    BakeryComponent,
    LoginComponent,
    ChocolateComponent,
    DairyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

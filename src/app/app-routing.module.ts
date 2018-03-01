import {NgModule} from '@angular/core';
import {Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule} from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { BakeryComponent } from './browse/bakery/bakery.component';
import { LoginComponent } from './login/login.component';
import { ChocolateComponent } from './browse/chocolate/chocolate.component';
import { DairyComponent } from './browse/dairy/dairy.component';


const appRoutes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: WelcomeComponent },
    { path: 'products', component: ProductComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'login', component:LoginComponent},
    { path: 'bakery', component:BakeryComponent},
    { path: 'chocolate', component:ChocolateComponent},
    { path: 'dairy', component:DairyComponent },
    { path: 'cart', component:CartComponent  }
  ]

  @NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

  })

  export class AppRoutingModule {

  }
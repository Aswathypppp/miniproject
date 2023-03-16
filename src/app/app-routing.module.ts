import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomebookingComponent } from './pages/homebooking/homebooking.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SingleComponent } from './pages/single/single.component';
import { BooknowComponent } from './pages/booknow/booknow.component';
import { OurservicesComponent } from './pages/ourservices/ourservices.component';
import { PaymentComponent } from './pages/payment/payment.component';


const routes: Routes = [
  {
    path:"",component:HomeComponent
    },
  {
  path:"home",component:HomeComponent
  },
  {
    path:"contact",component:ContactComponent
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"homebooking",component:HomebookingComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"about",component:AboutComponent
  },
  {
    path:"signup",component:SignupComponent
  },
  {
    path:"single",component:SingleComponent
  },
  {
   path:"booknow",component:BooknowComponent
  },
  {
   path:"ourservices",component:OurservicesComponent
   },
   {
   path:"payment",component:PaymentComponent
   }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';


import { MarketPlaceComponent } from './pages/market-place/market-place.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: '', component:RegisterComponent},
  {path: 'home', component:HomeComponent, canActivate:[AuthGuard]},
  {path: "marketplace", component: MarketPlaceComponent, canActivate:[AuthGuard]},
  {path:"myprofile/:id", component:MyprofileComponent, canActivate:[AuthGuard]},
  {path:"register", component:RegisterComponent},
  {path:"login", component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

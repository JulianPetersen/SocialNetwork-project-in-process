import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MarketPlaceComponent } from './pages/market-place/market-place.component';

const routes: Routes = [

  {path: '' , component:HomeComponent},
  {path: 'home' , component:HomeComponent},
  {path: "marketplace", component: MarketPlaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

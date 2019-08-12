import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HuskComponent } from './husk/husk.component';
import { PugComponent } from './pug/pug.component';
import { DobermanComponent } from './doberman/doberman.component';
import { AboutComponent } from './about/about.component';
import { FavDogComponent } from './fav-dog/fav-dog.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'husk',
    component:HuskComponent
  },
  {
    path:'doberman',
    component:DobermanComponent
  },
  {
    path:'pug',
    component:PugComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'favdogs',
    component:FavDogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

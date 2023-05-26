import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LandingComponent } from './landing/landing.component';
import { AboutusComponent } from './aboutus/aboutus.component';


const routes: Routes = [
  {
    path:'',
    component: LandingComponent
  },
  {
    path:'detail',
    component: UserDetailComponent
  },
  {
    path:'list',
    component: UserListComponent
  },
  {
    path:'aboutUs',
    component: AboutusComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

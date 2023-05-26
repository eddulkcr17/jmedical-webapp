import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LandingComponent } from './landing/landing.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    UserDetailComponent,
    UserListComponent,
    LandingComponent,
    AboutusComponent,
    ContactComponent,
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }

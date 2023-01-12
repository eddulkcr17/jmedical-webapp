import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAppComponent } from './components/header-app/header-app.component';
import { FooterAppComponent } from './components/footer-app/footer-app.component';

@NgModule({
  declarations: [
   HeaderAppComponent,
   FooterAppComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderAppComponent,
    FooterAppComponent
  ]
})
export class SharedModule { }

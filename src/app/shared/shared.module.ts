import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAppComponent } from './components/header-app/header-app.component';
import { FotterComponent } from './components/fotter/fotter.component';
import { FotterAppComponent } from './components/fotter-app/fotter-app.component';



@NgModule({
  declarations: [
    HeaderAppComponent,
    FotterComponent,
    FotterAppComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

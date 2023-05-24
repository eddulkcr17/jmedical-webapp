import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import * as fromComponents from './components';
import { CarouselMainComponent } from './components/carousel-main/carousel-main.component';
import { HeroComponent } from './components/hero/hero.component';
import { InfoServicesHeroComponent } from './components/info-services-hero/info-services-hero.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [...fromComponents.components, CarouselMainComponent, HeroComponent, InfoServicesHeroComponent, ContactComponent],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselMainComponent,
    HeroComponent,
    InfoServicesHeroComponent,
    ContactComponent,
    ...fromComponents.components
  ]

})
export class SharedModule { }

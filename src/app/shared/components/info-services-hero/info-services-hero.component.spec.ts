import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoServicesHeroComponent } from './info-services-hero.component';

describe('InfoServicesHeroComponent', () => {
  let component: InfoServicesHeroComponent;
  let fixture: ComponentFixture<InfoServicesHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoServicesHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoServicesHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

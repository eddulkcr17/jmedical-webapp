import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotterAppComponent } from './fotter-app.component';

describe('FotterAppComponent', () => {
  let component: FotterAppComponent;
  let fixture: ComponentFixture<FotterAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotterAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotterAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

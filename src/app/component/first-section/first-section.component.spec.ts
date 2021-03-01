import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSectionComponent } from './first-section.component';

describe('FirstSectionComponent', () => {
  let component: FirstSectionComponent;
  let fixture: ComponentFixture<FirstSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

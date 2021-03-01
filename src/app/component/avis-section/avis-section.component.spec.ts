import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisSectionComponent } from './avis-section.component';

describe('AvisSectionComponent', () => {
  let component: AvisSectionComponent;
  let fixture: ComponentFixture<AvisSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

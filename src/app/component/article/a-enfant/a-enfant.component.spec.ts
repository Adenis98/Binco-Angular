import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AEnfantComponent } from './a-enfant.component';

describe('AEnfantComponent', () => {
  let component: AEnfantComponent;
  let fixture: ComponentFixture<AEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AEnfantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

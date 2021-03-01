import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AHommeComponent } from './a-homme.component';

describe('AHommeComponent', () => {
  let component: AHommeComponent;
  let fixture: ComponentFixture<AHommeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AHommeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AHommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

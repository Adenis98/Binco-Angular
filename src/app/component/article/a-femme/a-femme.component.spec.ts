import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFemmeComponent } from './a-femme.component';

describe('AFemmeComponent', () => {
  let component: AFemmeComponent;
  let fixture: ComponentFixture<AFemmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFemmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AFemmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

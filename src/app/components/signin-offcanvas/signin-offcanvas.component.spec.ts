import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninOffcanvasComponent } from './signin-offcanvas.component';

describe('SigninOffcanvasComponent', () => {
  let component: SigninOffcanvasComponent;
  let fixture: ComponentFixture<SigninOffcanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SigninOffcanvasComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninOffcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

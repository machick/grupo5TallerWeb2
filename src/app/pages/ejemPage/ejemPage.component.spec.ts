import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemPageComponent } from './ejemPage.component';

describe('EjemPageComponent', () => {
  let component: EjemPageComponent;
  let fixture: ComponentFixture<EjemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarUnloggedComponent } from './navbar-unlogged.component';

describe('NavbarUnloggedComponent', () => {
  let component: NavbarUnloggedComponent;
  let fixture: ComponentFixture<NavbarUnloggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarUnloggedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarUnloggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

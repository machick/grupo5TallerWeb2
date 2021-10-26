import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUnloggedComponent } from './home-unlogged.component';

describe('HomeUnloggedComponent', () => {
  let component: HomeUnloggedComponent;
  let fixture: ComponentFixture<HomeUnloggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeUnloggedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUnloggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

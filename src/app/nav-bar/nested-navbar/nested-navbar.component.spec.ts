import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedNavbarComponent } from './nested-navbar.component';

describe('NestedNavbarComponent', () => {
  let component: NestedNavbarComponent;
  let fixture: ComponentFixture<NestedNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

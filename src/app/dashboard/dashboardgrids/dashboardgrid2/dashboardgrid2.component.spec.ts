import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardgrid2Component } from './dashboardgrid2.component';

describe('Dashboardgrid2Component', () => {
  let component: Dashboardgrid2Component;
  let fixture: ComponentFixture<Dashboardgrid2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboardgrid2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboardgrid2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

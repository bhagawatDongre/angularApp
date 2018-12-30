import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { tablecell2Component } from './tablecell2.component';

describe('tablecell2Component', () => {
  let component: tablecell2Component;
  let fixture: ComponentFixture<tablecell2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ tablecell2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(tablecell2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

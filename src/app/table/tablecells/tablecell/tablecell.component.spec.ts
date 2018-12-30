import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { tablecellComponent } from './tablecell.component';

describe('tablecellComponent', () => {
  let component: tablecellComponent;
  let fixture: ComponentFixture<tablecellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ tablecellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(tablecellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkayComponent } from './okay.component';

describe('OkayComponent', () => {
  let component: OkayComponent;
  let fixture: ComponentFixture<OkayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

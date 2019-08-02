import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InpComponent } from './inp.component';

describe('InpComponent', () => {
  let component: InpComponent;
  let fixture: ComponentFixture<InpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NmComponent } from './nm.component';

describe('NmComponent', () => {
  let component: NmComponent;
  let fixture: ComponentFixture<NmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

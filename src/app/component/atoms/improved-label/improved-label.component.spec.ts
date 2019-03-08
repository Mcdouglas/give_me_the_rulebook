import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovedLabelComponent } from './improved-label.component';

describe('ImprovedLabelComponent', () => {
  let component: ImprovedLabelComponent;
  let fixture: ComponentFixture<ImprovedLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprovedLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprovedLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

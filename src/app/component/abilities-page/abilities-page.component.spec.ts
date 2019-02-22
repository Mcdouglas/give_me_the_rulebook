import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitiesPageComponent } from './abilities-page.component';

describe('AbilitiesPageComponent', () => {
  let component: AbilitiesPageComponent;
  let fixture: ComponentFixture<AbilitiesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbilitiesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

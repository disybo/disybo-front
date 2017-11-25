import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationsFuelPumpedComponent } from './stations-fuel-pumped.component';

describe('StationsFuelPumpedComponent', () => {
  let component: StationsFuelPumpedComponent;
  let fixture: ComponentFixture<StationsFuelPumpedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationsFuelPumpedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationsFuelPumpedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

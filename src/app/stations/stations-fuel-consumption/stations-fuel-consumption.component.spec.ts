import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationsFuelConsumptionComponent } from './stations-fuel-consumption.component';

describe('StationsFuelConsumptionComponent', () => {
  let component: StationsFuelConsumptionComponent;
  let fixture: ComponentFixture<StationsFuelConsumptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationsFuelConsumptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationsFuelConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleConsumptionComponent } from './vehicle-consumption.component';

describe('VehicleConsumptionComponent', () => {
  let component: VehicleConsumptionComponent;
  let fixture: ComponentFixture<VehicleConsumptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleConsumptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

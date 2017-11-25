import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesPollutionComponent } from './vehicles-pollution.component';

describe('VehiclesPollutionComponent', () => {
  let component: VehiclesPollutionComponent;
  let fixture: ComponentFixture<VehiclesPollutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesPollutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesPollutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

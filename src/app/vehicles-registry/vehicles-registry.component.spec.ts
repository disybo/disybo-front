import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesRegistryComponent } from './vehicles-registry.component';

describe('VehiclesRegistryComponent', () => {
  let component: VehiclesRegistryComponent;
  let fixture: ComponentFixture<VehiclesRegistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesRegistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

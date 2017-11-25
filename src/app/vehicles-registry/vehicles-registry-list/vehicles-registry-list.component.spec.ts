import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesRegistryListComponent } from './vehicles-registry-list.component';

describe('VehiclesRegistryListComponent', () => {
  let component: VehiclesRegistryListComponent;
  let fixture: ComponentFixture<VehiclesRegistryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesRegistryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesRegistryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

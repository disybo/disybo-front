import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesRegistrySearchComponent } from './vehicles-registry-search.component';

describe('VehiclesRegistrySearchComponent', () => {
  let component: VehiclesRegistrySearchComponent;
  let fixture: ComponentFixture<VehiclesRegistrySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesRegistrySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesRegistrySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationsRegistryComponent } from './stations-registry.component';

describe('StationsRegistryComponent', () => {
  let component: StationsRegistryComponent;
  let fixture: ComponentFixture<StationsRegistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationsRegistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationsRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

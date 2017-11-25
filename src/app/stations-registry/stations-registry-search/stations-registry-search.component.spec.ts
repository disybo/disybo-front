import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationsRegistrySearchComponent } from './stations-registry-search.component';

describe('StationsRegistrySearchComponent', () => {
  let component: StationsRegistrySearchComponent;
  let fixture: ComponentFixture<StationsRegistrySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationsRegistrySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationsRegistrySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationsRegistryListComponent } from './stations-registry-list.component';

describe('StationsRegistryListComponent', () => {
  let component: StationsRegistryListComponent;
  let fixture: ComponentFixture<StationsRegistryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationsRegistryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationsRegistryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationsFuelTypeComponent } from './stations-fuel-type.component';

describe('StationsFuelTypeComponent', () => {
  let component: StationsFuelTypeComponent;
  let fixture: ComponentFixture<StationsFuelTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationsFuelTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationsFuelTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

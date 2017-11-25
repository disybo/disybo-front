import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationsOverallComparisonComponent } from './stations-overall-comparison.component';

describe('StationsOverallComparisonComponent', () => {
  let component: StationsOverallComparisonComponent;
  let fixture: ComponentFixture<StationsOverallComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationsOverallComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationsOverallComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

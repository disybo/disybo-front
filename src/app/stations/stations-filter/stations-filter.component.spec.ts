import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationsFilterComponent } from './stations-filter.component';

describe('StationsFilterComponent', () => {
  let component: StationsFilterComponent;
  let fixture: ComponentFixture<StationsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

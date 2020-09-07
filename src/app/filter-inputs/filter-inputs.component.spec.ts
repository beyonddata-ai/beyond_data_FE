import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterInputsComponent } from './filter-inputs.component';

describe('FilterInputsComponent', () => {
  let component: FilterInputsComponent;
  let fixture: ComponentFixture<FilterInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

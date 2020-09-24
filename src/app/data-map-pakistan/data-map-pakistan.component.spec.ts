import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMapPakistanComponent } from './data-map-pakistan.component';

describe('DataMapPakistanComponent', () => {
  let component: DataMapPakistanComponent;
  let fixture: ComponentFixture<DataMapPakistanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataMapPakistanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMapPakistanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

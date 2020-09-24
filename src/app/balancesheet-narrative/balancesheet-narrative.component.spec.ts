import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancesheetNarrativeComponent } from './balancesheet-narrative.component';

describe('BalancesheetNarrativeComponent', () => {
  let component: BalancesheetNarrativeComponent;
  let fixture: ComponentFixture<BalancesheetNarrativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalancesheetNarrativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalancesheetNarrativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

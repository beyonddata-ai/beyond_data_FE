import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyCsvComponent } from './verify-csv.component';

describe('VerifyCsvComponent', () => {
  let component: VerifyCsvComponent;
  let fixture: ComponentFixture<VerifyCsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyCsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

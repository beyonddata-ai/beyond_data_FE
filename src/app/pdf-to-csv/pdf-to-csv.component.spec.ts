import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfToCsvComponent } from './pdf-to-csv.component';

describe('PdfToCsvComponent', () => {
  let component: PdfToCsvComponent;
  let fixture: ComponentFixture<PdfToCsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfToCsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfToCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

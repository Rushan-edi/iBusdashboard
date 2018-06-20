import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportServicesComponent } from './report-services.component';

describe('ReportServicesComponent', () => {
  let component: ReportServicesComponent;
  let fixture: ComponentFixture<ReportServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

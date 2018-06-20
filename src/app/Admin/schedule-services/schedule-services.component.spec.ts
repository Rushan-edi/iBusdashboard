import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleServicesComponent } from './schedule-services.component';

describe('ScheduleServicesComponent', () => {
  let component: ScheduleServicesComponent;
  let fixture: ComponentFixture<ScheduleServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

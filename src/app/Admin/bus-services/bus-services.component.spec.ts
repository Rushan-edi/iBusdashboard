import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusServicesComponent } from './bus-services.component';

describe('BusServicesComponent', () => {
  let component: BusServicesComponent;
  let fixture: ComponentFixture<BusServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

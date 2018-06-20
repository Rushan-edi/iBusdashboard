import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesServicesComponent } from './routes-services.component';

describe('RoutesServicesComponent', () => {
  let component: RoutesServicesComponent;
  let fixture: ComponentFixture<RoutesServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

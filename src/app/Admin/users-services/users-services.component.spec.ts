import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersServicesComponent } from './users-services.component';

describe('UsersServicesComponent', () => {
  let component: UsersServicesComponent;
  let fixture: ComponentFixture<UsersServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutedirectionComponent } from './routedirection.component';

describe('RoutedirectionComponent', () => {
  let component: RoutedirectionComponent;
  let fixture: ComponentFixture<RoutedirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutedirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutedirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

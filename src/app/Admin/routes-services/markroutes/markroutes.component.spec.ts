import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkroutesComponent } from './markroutes.component';

describe('MarkroutesComponent', () => {
  let component: MarkroutesComponent;
  let fixture: ComponentFixture<MarkroutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkroutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

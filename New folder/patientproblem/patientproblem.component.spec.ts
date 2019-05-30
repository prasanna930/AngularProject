import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientproblemComponent } from './patientproblem.component';

describe('PatientproblemComponent', () => {
  let component: PatientproblemComponent;
  let fixture: ComponentFixture<PatientproblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientproblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientproblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

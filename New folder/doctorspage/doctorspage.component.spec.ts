import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorspageComponent } from './doctorspage.component';

describe('DoctorspageComponent', () => {
  let component: DoctorspageComponent;
  let fixture: ComponentFixture<DoctorspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

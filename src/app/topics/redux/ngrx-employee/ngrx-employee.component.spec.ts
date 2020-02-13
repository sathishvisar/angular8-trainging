import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxEmployeeComponent } from './ngrx-employee.component';

describe('NgrxEmployeeComponent', () => {
  let component: NgrxEmployeeComponent;
  let fixture: ComponentFixture<NgrxEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng8GeneralComponent } from './ng8-general.component';

describe('Ng8GeneralComponent', () => {
  let component: Ng8GeneralComponent;
  let fixture: ComponentFixture<Ng8GeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng8GeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng8GeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

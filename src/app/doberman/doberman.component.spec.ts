import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DobermanComponent } from './doberman.component';

describe('DobermanComponent', () => {
  let component: DobermanComponent;
  let fixture: ComponentFixture<DobermanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DobermanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DobermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavDogComponent } from './fav-dog.component';

describe('FavDogComponent', () => {
  let component: FavDogComponent;
  let fixture: ComponentFixture<FavDogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavDogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

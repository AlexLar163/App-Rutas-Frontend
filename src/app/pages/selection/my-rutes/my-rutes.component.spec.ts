import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRutesComponent } from './my-rutes.component';

describe('MyRutesComponent', () => {
  let component: MyRutesComponent;
  let fixture: ComponentFixture<MyRutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

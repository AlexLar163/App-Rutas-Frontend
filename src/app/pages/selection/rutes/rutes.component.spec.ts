import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutesComponent } from './rutes.component';

describe('RutesComponent', () => {
  let component: RutesComponent;
  let fixture: ComponentFixture<RutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

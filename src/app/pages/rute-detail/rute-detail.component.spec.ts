import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuteDetailComponent } from './rute-detail.component';

describe('RuteDetailComponent', () => {
  let component: RuteDetailComponent;
  let fixture: ComponentFixture<RuteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuteDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Co2DialogComponent } from './co2-dialog.component';

describe('Co2DialogComponent', () => {
  let component: Co2DialogComponent;
  let fixture: ComponentFixture<Co2DialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Co2DialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Co2DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

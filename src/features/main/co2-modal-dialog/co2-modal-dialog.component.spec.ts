import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Co2ModalDialogComponent } from './co2-modal-dialog.component';

describe('Co2ModalDialogComponent', () => {
  let component: Co2ModalDialogComponent;
  let fixture: ComponentFixture<Co2ModalDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Co2ModalDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Co2ModalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

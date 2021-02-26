import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelingDialogComponent } from './feeling-dialog.component';

describe('FeelingDialogComponent', () => {
  let component: FeelingDialogComponent;
  let fixture: ComponentFixture<FeelingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeelingDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeelingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

import { FeelingDialogComponent } from "./feeling-dialog.component";

describe("FeelingDialogComponent", () => {
  let component: FeelingDialogComponent;
  let fixture: ComponentFixture<FeelingDialogComponent>;
  let matDialogRef = jasmine.createSpyObj(["close"]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeelingDialogComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: matDialogRef,
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: "",
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeelingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

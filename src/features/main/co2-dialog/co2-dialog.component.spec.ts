import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from "@angular/material/dialog";

import { Co2DialogComponent } from "./co2-dialog.component";

describe("Co2DialogComponent", () => {
  let component: Co2DialogComponent;
  let fixture: ComponentFixture<Co2DialogComponent>;
  let matDialogRef = jasmine.createSpyObj(["close"]);
  let matDialog = jasmine.createSpyObj(["close"]);

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [Co2DialogComponent],
        providers: [
          {
            provide: MatDialogRef,
            useValue: matDialogRef,
          },
          {
            provide: MatDialog,
            useValue: matDialog,
          },
          {
            provide: MAT_DIALOG_DATA,
            useValue: {},
          },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Co2DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

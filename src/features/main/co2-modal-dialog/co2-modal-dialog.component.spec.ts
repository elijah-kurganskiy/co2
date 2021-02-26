import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { RouterTestingModule } from "@angular/router/testing";
import { NgxsModule } from "@ngxs/store";
import { of } from "rxjs";
import { Co2State } from "../../../store/co2-store/co2.state";

import { Co2ModalDialogComponent } from "./co2-modal-dialog.component";

describe("Co2ModalDialogComponent", () => {
  let component: Co2ModalDialogComponent;
  let fixture: ComponentFixture<Co2ModalDialogComponent>;
  let matDialogRef = jasmine.createSpyObj({ afterClosed: of() });
  let matDialog = jasmine.createSpyObj(["close", "open"]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        NgxsModule.forRoot([Co2State]),
      ],
      declarations: [Co2ModalDialogComponent],
      providers: [
        {
          provide: MatDialog,
          useValue: matDialog,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    matDialog.open.and.returnValue(matDialogRef);
    fixture = TestBed.createComponent(Co2ModalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

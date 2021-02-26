import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { map, switchMap } from "rxjs/operators";
import { sectors } from "../../../store/co2-store/const/sector.const";
import { Co2Model } from "../../../store/co2-store/models/co2.model";
import { Co2ModalDialogComponent } from "../co2-modal-dialog/co2-modal-dialog.component";
import { FeelingDialogComponent } from "../feeling-dialog/feeling-dialog.component";
import {
  DialogDataInputModel,
  DialogDataOutputModel,
} from "./models/dialog-data-input.model";

@Component({
  selector: "app-co2-dialog",
  templateUrl: "./co2-dialog.component.html",
  styleUrls: ["./co2-dialog.component.scss"],
})
export class Co2DialogComponent implements OnInit {
  public sectors = sectors;
  sector = new FormControl("", [Validators.required]);

  co2Form = new FormGroup({
    sector: this.sector,
    emoji: new FormControl(":)", [Validators.required]),
    value: new FormControl(0, [
      Validators.required,
      Validators.pattern(/^[+]?\d+([.]\d+)?$/),
    ]),
  });

  constructor(
    public dialog: MatDialog,
    private readonly dialogRef: MatDialogRef<
      Co2DialogComponent,
      DialogDataOutputModel
    >,
    @Inject(MAT_DIALOG_DATA) private readonly data: DialogDataInputModel
  ) {}

  public ngOnInit() {
    this.co2Form.reset({
      value: this.data.item?.co2Value ?? 0,
      sector: this.data.item?.sector ?? "",
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  selectEmoji() {
    this.dialog
      .open<FeelingDialogComponent, string, string>(FeelingDialogComponent, {
        data: this.co2Form.value.emoji,
      })
      .afterClosed()
      .subscribe((result) =>
        this.co2Form.patchValue({
          emoji: result,
        })
      );
  }

  submitForm(): void {
    if (this.co2Form.valid) {
      const formValue = this.co2Form.value;
      this.dialogRef.close({
        item: {
          id: this.data.item?.id,
          feeling: ":)",
          co2Value: formValue.value,
          sector: formValue.sector,
        },
      });
    }
  }
}

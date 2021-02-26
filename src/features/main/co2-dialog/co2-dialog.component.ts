import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { sectors } from "../../../store/co2-store/const/sector.const";
import { Co2ModalDialogComponent } from "../co2-modal-dialog/co2-modal-dialog.component";
import { DialogDataInputModel } from "./models/dialog-data-input.model";

@Component({
  selector: "app-co2-dialog",
  templateUrl: "./co2-dialog.component.html",
  styleUrls: ["./co2-dialog.component.scss"],
})
export class Co2DialogComponent implements OnInit {
  public sectors = sectors;

  co2Form = new FormGroup({});

  constructor(
    private readonly dialogRef: MatDialogRef<Co2ModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly data: DialogDataInputModel
  ) {}

  public ngOnInit() {
    console.log("ID", this.data.item);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    this.dialogRef.close();
  }
}

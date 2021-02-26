import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { Co2ModalDialogComponent } from "../co2-modal-dialog/co2-modal-dialog.component";

@Component({
  selector: "app-co2-dialog",
  templateUrl: "./co2-dialog.component.html",
  styleUrls: ["./co2-dialog.component.scss"],
})
export class Co2DialogComponent {
  constructor(public dialogRef: MatDialogRef<Co2ModalDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    this.dialogRef.close();
  }
}

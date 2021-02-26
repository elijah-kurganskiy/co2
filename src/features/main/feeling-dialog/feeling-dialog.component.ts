import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { DialogDataOutputModel } from "../co2-dialog/models/dialog-data-input.model";
import { Co2ModalDialogComponent } from "../co2-modal-dialog/co2-modal-dialog.component";

@Component({
  selector: "app-feeling-dialog",
  templateUrl: "./feeling-dialog.component.html",
  styleUrls: ["./feeling-dialog.component.css"],
})
export class FeelingDialogComponent {
  emojies = [":)", ":("];

  form = new FormGroup({
    emoji: new FormControl(0, [Validators.required]),
  });

  constructor(
    private readonly dialogRef: MatDialogRef<FeelingDialogComponent>
  ) {}

  submit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value.emoji);
    }
  }
}

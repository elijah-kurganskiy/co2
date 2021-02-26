import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { DialogDataInputModel } from "../co2-dialog/models/dialog-data-input.model";

@Component({
  selector: "app-feeling-dialog",
  templateUrl: "./feeling-dialog.component.html",
  styleUrls: ["./feeling-dialog.component.css"],
})
export class FeelingDialogComponent implements OnInit {
  emojis = [":)", ":(", ":D", ":|", "8)"];

  form = new FormGroup({
    emoji: new FormControl(null, [Validators.required]),
  });

  constructor(
    private readonly dialogRef: MatDialogRef<FeelingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly data: string
  ) {}

  ngOnInit() {
    this.form.reset({
      emoji: this.data,
    });
  }

  public submit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value.emoji);
    }
  }
}

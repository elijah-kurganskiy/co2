import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-feeling-dialog",
  templateUrl: "./feeling-dialog.component.html",
  styleUrls: ["./feeling-dialog.component.css"],
})
export class FeelingDialogComponent {
  emojis = [":)", ":(", ":D", ":|", "8)"];

  form = new FormGroup({
    emoji: new FormControl(null, [Validators.required]),
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

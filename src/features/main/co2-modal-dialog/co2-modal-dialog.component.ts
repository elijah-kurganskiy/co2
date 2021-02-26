import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { Co2DialogComponent } from "../co2-dialog/co2-dialog.component";

@Component({
  template: "",
})
export class Co2ModalDialogComponent {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.openDialog();
  }

  openDialog(): void {
    console.log("open dialog");
    const dialogRef = this.dialog.open(Co2DialogComponent, {
      width: "250px",
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.router.navigate(["../"], { relativeTo: this.route });
    });
  }
}

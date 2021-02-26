import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { iif, Observable } from "rxjs";
import { filter, first, map, mergeMap, switchMap, tap } from "rxjs/operators";
import { v4 as uuid } from "uuid";
import { Co2 } from "../../../store/co2-store/co2.actions";
import { Co2State } from "../../../store/co2-store/co2.state";
import { Co2Model } from "../../../store/co2-store/models/co2.model";
import { Co2DialogComponent } from "../co2-dialog/co2-dialog.component";
import {
  DialogDataInputModel,
  DialogDataOutputModel,
} from "../co2-dialog/models/dialog-data-input.model";

@Component({
  template: "",
})
export class Co2ModalDialogComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        first(),
        map((paramMap) => paramMap.get("id")),
        switchMap((id) => {
          if (id) {
            return this.store.select(Co2State.findItemById).pipe(
              map((filterFn) => filterFn(id)),
              first(),
              switchMap((item) => this.openDialog(item)),
              tap(() => this.closeDialog()),
              filter((result) => !!result),
              tap((result) => this.store.dispatch(new Co2.Edit(result.item)))
            );
          } else {
            return this.openDialog().pipe(
              tap(() => this.closeDialog()),
              filter((result) => !!result),
              tap((result) => {
                const newId = uuid();
                return this.store.dispatch(
                  new Co2.Add({ ...result.item, id: newId })
                );
              })
            );
          }
        })
      )
      .subscribe();
  }

  closeDialog() {
    this.router.navigate(["/home"], { relativeTo: this.route });
  }

  openDialog(item?: Co2Model): Observable<DialogDataOutputModel> {
    const dialogRef = this.dialog.open<
      Co2DialogComponent,
      DialogDataInputModel,
      DialogDataOutputModel
    >(Co2DialogComponent, {
      width: "250px",
      data: {
        item: item ?? null,
      },
    });
    return dialogRef.afterClosed();
  }
}

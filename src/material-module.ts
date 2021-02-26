import { A11yModule } from "@angular/cdk/a11y";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { CdkTableModule } from "@angular/cdk/table";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  exports: [
    A11yModule,
    CdkTableModule,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    ScrollingModule,
  ],
})
export class MaterialModule {}

/**  Copyright 2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */

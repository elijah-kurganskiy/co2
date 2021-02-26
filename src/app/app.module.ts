import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsModule } from "@ngxs/store";
import { environment } from "../environments/environment";
import { Co2DialogComponent } from "../features/main/co2-dialog/co2-dialog.component";
import { Co2ModalDialogComponent } from "../features/main/co2-modal-dialog/co2-modal-dialog.component";
import { Co2TableComponent } from "../features/main/co2-table/co2-table.component";
import { MainPageComponent } from "../features/main/page/main-page.component";
import { MaterialModule } from "../material-module";
import { Co2State } from "../store/co2-store/co2.state";
import { AppComponent } from "./app.component";

@NgModule({
  exports: [RouterModule],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: "home",
        component: MainPageComponent,
        children: [
          {
            path: "add-item",
            component: Co2ModalDialogComponent,
          },
          {
            path: "edit-item/:id",
            component: Co2ModalDialogComponent,
          },
        ],
      },
      { path: "**", redirectTo: "home" },
    ]),
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([Co2State], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    MaterialModule,
  ],
  declarations: [
    AppComponent,
    Co2TableComponent,
    Co2DialogComponent,
    MainPageComponent,
    Co2ModalDialogComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

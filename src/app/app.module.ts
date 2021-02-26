import { NgModule } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { BrowserModule } from "@angular/platform-browser";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsModule } from "@ngxs/store";
import { Co2DialogComponent } from "../features/modal/co2-dialog/co2-dialog.component";
import { Co2TableComponent } from "../features/table/co2-table/co2-table.component";
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    MatTableModule,
  ],
  declarations: [AppComponent, Co2TableComponent, Co2DialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

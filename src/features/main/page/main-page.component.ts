import { Component, OnInit } from "@angular/core";
import { Co2Model } from "../../../store/co2-store/models/co2.model";

@Component({
  selector: "app-main-page",
  styleUrls: ["./main-page.component.scss"],
  templateUrl: "./main-page.component.html",
})
export class MainPageComponent {
  dataSource: Co2Model[];

  constructor() {}

  addItem() {}
}

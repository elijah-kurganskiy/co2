import { Component, OnInit } from "@angular/core";
import { Co2Model } from "../../../store/co2-store/models/Co2.model";

@Component({
  selector: "app-co2-table",
  templateUrl: "./co2-table.component.html",
  styleUrls: ["./co2-table.component.css"],
})
export class Co2TableComponent implements OnInit {
  dataSource: Co2Model[];

  constructor() {}

  ngOnInit() {}
}

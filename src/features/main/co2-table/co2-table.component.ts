import { Component, OnInit } from "@angular/core";
import { Co2Model } from "../../../store/co2-store/models/co2.model";

@Component({
  selector: "app-co2-table",
  templateUrl: "./co2-table.component.html",
  styleUrls: ["./co2-table.component.css"],
})
export class Co2TableComponent implements OnInit {
  displayedColumns = ["sector", "co2Value", "feeling", "actions"];
  dataSource: Co2Model[] = [
    {
      co2Value: 10,
      feeling: ":)",
      id: "das",
      sector: "SECTOR",
    },
    {
      co2Value: 10,
      feeling: ":)",
      id: "das",
      sector: "SECTOR 2",
    },
  ];

  constructor() {}

  ngOnInit() {}
}

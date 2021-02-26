import { Component, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { Co2State } from "../../../store/co2-store/co2.state";
import { Co2Model } from "../../../store/co2-store/models/co2.model";

@Component({
  selector: "app-co2-table",
  templateUrl: "./co2-table.component.html",
  styleUrls: ["./co2-table.component.css"],
})
export class Co2TableComponent implements OnInit {
  displayedColumns = ["sector", "co2Value", "feeling", "actions"];
  dataSource$ = this.store.select(Co2State.selectAllItems);

  constructor(private readonly store: Store) {}

  ngOnInit() {}
}

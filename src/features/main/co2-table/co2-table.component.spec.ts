import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { NgxsModule } from "@ngxs/store";
import { Co2State } from "../../../store/co2-store/co2.state";

import { Co2TableComponent } from "./co2-table.component";

describe("Co2TableComponent", () => {
  let component: Co2TableComponent;
  let fixture: ComponentFixture<Co2TableComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NgxsModule.forRoot([Co2State])],
        declarations: [Co2TableComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Co2TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

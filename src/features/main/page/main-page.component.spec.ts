import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { NgxsModule } from "@ngxs/store";
import { Co2State } from "../../../store/co2-store/co2.state";
import { MainPageComponent } from "./main-page.component";

describe("MainPageComponent", () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NgxsModule.forRoot([Co2State])],
        declarations: [MainPageComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

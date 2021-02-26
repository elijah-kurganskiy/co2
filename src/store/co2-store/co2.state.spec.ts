import { TestBed } from "@angular/core/testing";
import { NgxsModule, Store } from "@ngxs/store";
import { Co2 } from "./co2";
import { Co2State } from "./co2.state";

describe("Co2State", () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([Co2State])],
    });

    store = TestBed.inject(Store);
  });

  it("should add new item to store", () => {
    store.dispatch(
      new Co2.Add({
        id: "test",
        feeling: ":)",
        sector: "SECTOR1",
        co2Value: 122,
      })
    );

    const items = store.selectSnapshot((state) => state.co2State.items);
    expect(items).toEqual([
      { id: "test", feeling: ":)", sector: "SECTOR1", co2Value: 122 },
    ]);
  });

  it("should edit item in the store", () => {
    store.reset({
      ...store.snapshot(),
      co2State: {
        items: [
          { id: "test", feeling: ":)", sector: "SECTOR1", co2Value: 122 },
        ],
      },
    });

    store.dispatch(
      new Co2.Edit({
        id: "test",
        feeling: ":D",
        sector: "SECTOR2",
        co2Value: 23,
      })
    );

    const items = store.selectSnapshot((state) => state.co2State.items);
    expect(items).toEqual([
      {
        id: "test",
        feeling: ":D",
        sector: "SECTOR2",
        co2Value: 23,
      },
    ]);
  });

  it("should delete item from the store", () => {
    store.reset({
      ...store.snapshot(),
      co2State: {
        items: [
          { id: "test", feeling: ":)", sector: "SECTOR1", co2Value: 122 },
        ],
      },
    });

    store.dispatch(new Co2.Delete("test"));

    const items = store.selectSnapshot((state) => state.co2State.items);
    expect(items).toEqual([]);
  });

  it("should return item by id", () => {
    store.reset({
      ...store.snapshot(),
      co2State: {
        items: [
          { id: "test", feeling: ":)", sector: "SECTOR1", co2Value: 122 },
        ],
      },
    });

    const item = store.selectSnapshot((state) =>
      Co2State.findItemById(state.co2State)("test")
    );
    expect(item).toEqual({
      id: "test",
      feeling: ":)",
      sector: "SECTOR1",
      co2Value: 122,
    });
  });
});

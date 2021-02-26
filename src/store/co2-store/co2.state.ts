import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Co2 } from "./co2";
import { Co2StateModel } from "./models/co2-state.model";
import { Co2Model } from "./models/co2.model";
import { v4 as uuid } from "uuid";

@State<Co2StateModel>({
  name: "co2State",
  defaults: {
    items: [],
  },
})
@Injectable()
export class Co2State {
  @Selector([Co2State])
  static findItemById(state: Co2StateModel) {
    return (id) => state.items.find((s) => s.id === id);
  }

  @Selector([Co2State])
  static selectAllItems(state: Co2StateModel) {
    return state.items;
  }

  @Action(Co2.Add)
  addCo2Item(ctx: StateContext<Co2StateModel>, action: Co2.Add) {
    const state = ctx.getState();
    const newItem: Co2Model = {
      ...action.payload,
    };
    ctx.setState({
      ...state,
      items: [...state.items, newItem],
    });
  }

  @Action(Co2.Edit)
  editCo2Item(ctx: StateContext<Co2StateModel>, action: Co2.Edit) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: state.items.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      }),
    });
  }

  @Action(Co2.Delete)
  removeItem(ctx: StateContext<Co2StateModel>, action: Co2.Delete) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: state.items.filter((item) => item.id !== action.id),
    });
  }
}

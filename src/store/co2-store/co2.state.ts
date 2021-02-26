import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { Co2 } from "./co2.actions";
import { Co2StateModel } from "./models/co2-state.model";
import { Co2Model } from "./models/co2.model";
import { v4 as uuid } from "uuid";

@State<Co2StateModel>({
  name: "co2-state",
  defaults: {
    items: [],
  },
})
@Injectable()
export class Co2State {
  @Action(Co2.Add)
  addCo2Item(ctx: StateContext<Co2StateModel>, action: Co2.Add) {
    const state = ctx.getState();
    const newItem: Co2Model = {
      id: uuid(),
      ...action.payload,
    };

    ctx.setState({
      ...state,
      items: [...state.items, newItem],
    });
  }
}

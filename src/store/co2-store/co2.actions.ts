import { Co2Model } from "./models/co2.model";

export namespace Co2 {
  export class Add {
    static readonly type = "[CO2] Add";
    constructor(public payload: Co2Model) {}
  }

  export class Edit {
    static readonly type = "[CO2] Edit";
    constructor(public payload: Co2Model) {}
  }

  export class Delete {
    static readonly type = "[CO2] Delete";
    constructor(public id: string) {}
  }
}

export interface IShipper {
  getCost(weight: number): number;
}

export class AirEastShipper implements IShipper {
  private DEFAULT_COST = 0.39;

  getCost(weight: number) {
    if (weight <= 15) {
      return weight * this.DEFAULT_COST;
    }
    if (weight <= 160) {
      return weight * 0.25;
    }
    if (weight > 160) {
      return weight * this.DEFAULT_COST + 10;
    }
  }
}
export class ChicagoSprintShipper implements IShipper {
  private DEFAULT_COST = 0.42;
  getCost(weight: number) {
    if (weight <= 15) {
      return weight * this.DEFAULT_COST;
    }
    if (weight <= 160) {
      return weight * 0.2;
    }
    if (weight > 160) {
      return 0;
    }
  }
}
export class PacificParcelShipper implements IShipper {
  private DEFAULT_COST = 0.51;
  getCost(weight: number) {
    if (weight <= 15) {
      return weight * this.DEFAULT_COST;
    }
    if (weight <= 160) {
      return weight * 0.19;
    }
    if (weight > 160) {
      return weight * this.DEFAULT_COST + weight * 0.02;
    }
  }
}

import {
  AirEastShipper,
  ChicagoSprintShipper,
  IShipper,
  PacificParcelShipper,
} from './Shipper';

export type Marks = ('Fragile' | 'Do Not Leave' | 'Return Receipt Requested')[];

export interface IState {
  shipmentId: number;
  toAddress: string;
  fromAddress: string;
  toZipCode: string;
  fromZipCode: string;
  weight: number;
  marks?: Marks;
}

type State = Omit<IState, 'shipmentId'>;

export interface IShipment {
  state: IState;
  getShipmentId(): number;
  ship(): string;
  setMark?(marks: Marks): void;
}

let uniqueId = 0;

export class Shipment implements IShipment {
  state: IState;
  protected shipper: IShipper | undefined;

  constructor(state: State, shipper?: IShipper) {
    this.state = {
      marks: [],
      ...this.state,
      ...state,
      shipmentId: this.getShipmentId(),
    };
    this.shipper = shipper;
  }

  getShipmentId() {
    const newId = uniqueId + 1;
    uniqueId = newId;
    return newId;
  }

  getShipmentCost() {
    // If shipper is passed via constructor, then use it
    if (this.shipper) {
      return this.shipper.getCost(this.state.weight);
    }

    // Else by default calculate cost based on zipCode
    const firstZipCode = this.state.toZipCode.substring(0, 1);

    switch (firstZipCode) {
      case '1':
      case '2':
      case '3':
        return new AirEastShipper().getCost(this.state.weight);
      case '4':
      case '5':
      case '6':
        return new ChicagoSprintShipper().getCost(this.state.weight);
      case '7':
      case '8':
      case '9':
        return new PacificParcelShipper().getCost(this.state.weight);
    }
  }

  ship() {
    return `
      Shipment with the ID ${this.state.shipmentId} will be picked up from ${
      this.state.fromAddress
    }, ${this.state.fromZipCode} and shipped to ${this.state.toAddress}, ${
      this.state.toZipCode
    }
      Cost = ${this.getShipmentCost()}
    `;
  }
}

export class LetterShipment extends Shipment {
  getShipmentCost() {
    return this.shipper.getCost(this.state.weight);
  }
}

export class PackagesShipment extends Shipment {
  getShipmentCost() {
    return this.shipper.getCost(this.state.weight);
  }
}
export class OversizedShipment extends Shipment {
  getShipmentCost() {
    return this.shipper.getCost(this.state.weight);
  }
}

export class ShipmentDecorator implements IShipment {
  protected wrappee: IShipment;
  state: IState;

  constructor(shipment: IShipment) {
    this.wrappee = shipment;
  }

  getShipmentId() {
    return this.wrappee.getShipmentId();
  }

  setMark(marks: Marks) {
    this.wrappee.state.marks = [...marks];
  }

  private getMarksText() {
    if (!this.wrappee?.state.marks) return '';

    return this.wrappee.state.marks
      .map((mark) => {
        const text =
          mark == 'Do Not Leave' ? 'Do Not Leave If Address Not At Home' : mark;

        return (`\t**MARK ${text?.toUpperCase()}**`);
      })
      .join('\n');
  }

  ship(marks?: Marks) {
    return `${this.wrappee.ship()}\n${this.getMarksText()}`;
  }
}

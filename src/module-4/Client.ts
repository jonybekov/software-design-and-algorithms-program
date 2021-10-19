import { IGui } from './GUI';
import { IShipment } from './Shipment';

export class Client {
  constructor(protected gui: IGui) {}

  onShip(shipment: IShipment) {
    shipment.setMark?.(this.gui.marks);
    const shipmentInfo = shipment.ship();
    this.gui.render(shipmentInfo);
  }
}

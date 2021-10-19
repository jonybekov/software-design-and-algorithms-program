import { Client } from './Client';
import { MockGui } from './GUI';
import { Shipment, ShipmentDecorator } from './Shipment';
import { AirEastShipper } from './Shipper';


const gui = new MockGui().setMarks(['Fragile']);
const client = new Client(gui);

const defaultShipment = new Shipment({
  toAddress: 'Tashkent, Uzb',
  toZipCode: '100115',
  weight: 120,
  fromAddress: 'Gulistan, Syrdarya',
  fromZipCode: '120100',
});

const pacificShipment = new Shipment(
  {
    toAddress: 'Khorezm, Urgench',
    toZipCode: '100123',
    weight: 15,
    fromAddress: 'Fergana, Valley',
    fromZipCode: '122000'
  },
  new AirEastShipper()
);

const shipmentWithMarks = new ShipmentDecorator(pacificShipment);


client.onShip(defaultShipment);
client.onShip(pacificShipment);
client.onShip(shipmentWithMarks);

// RESULT

// Shipment with the ID 1 will be picked up from Gulistan, Syrdarya, 120100 and shipped to Tashkent, Uzb, 100115
// Cost = 30

// Shipment with the ID 2 will be picked up from Fergana, Valley, 122000 and shipped to Khorezm, Urgench, 100123
// Cost = 5.8500000000000005

// Shipment with the ID 2 will be picked up from Fergana, Valley, 122000 and shipped to Khorezm, Urgench, 100123
// Cost = 5.8500000000000005

// **MARK FRAGILE**

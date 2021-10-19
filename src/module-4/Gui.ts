import { Marks, Shipment } from './Shipment';

export interface IGui {
  on(eventType: string, callback: (state: Shipment) => void);
  trigger(eventType: string, state: Shipment);
  render(info): void;
  marks?: Marks;
  setMarks?(marks: Marks);
}

export class Gui implements IGui {
  on(eventType, callback) {}
  trigger(eventType, state) {}
  render() {}
}

export class MockGui implements IGui {
  marks = [];
  on(eventType, callback) {}
  trigger(eventType, state) {}
  render(info) {
    console.log(info);
  }
  setMarks(marks: Marks) {
    this.marks = marks;
    return this;
  }
}

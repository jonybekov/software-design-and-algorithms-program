import { Consumable } from './Consumable';

// your code goes here
export class Pizza extends Consumable{
    slicesEaten = 0

    constructor(public numberOfSlices: number, spoiled: boolean) {
        super('pizza', numberOfSlices, 1, spoiled)
    }

    eat(){
        if(this.slicesEaten < this.numberOfSlices) {
            this.slicesEaten++;

            if(this.slicesEaten >= this.numberOfSlices) {
                this.setConsumed(true);
            }

            return 'You eat the slice of pizza'
        } else {
            ''
        }
    }
}
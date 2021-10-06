import { Weapon } from './Weapon';

export class Bow extends Weapon{
    constructor() {
        super('bow', 1,1,1,1,)
    }

    polish() {
        if(this.getDurability() < 1) {
            this.setDurability(this.getDurability() + Weapon.MODIFIER_CHANGE_RATE);
        }
    }
}
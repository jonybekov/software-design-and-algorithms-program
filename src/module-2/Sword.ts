import { Weapon } from './Weapon';

export class Sword extends Weapon{
    constructor(baseDamage:number, baseDurability:number, value:number, weight:number) {
        super('sword', baseDamage, baseDurability, value, weight)
    }

    polish() {
        if(this.baseDamage * 1.25 > this.damageModifier) {
            this.damageModifier += Weapon.MODIFIER_CHANGE_RATE;
        }
    }
}
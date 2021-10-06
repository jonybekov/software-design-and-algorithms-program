import { Item } from './Item';

export abstract class Weapon extends Item {
    static MODIFIER_CHANGE_RATE = 0.05;
    public damageModifier: number;
    public durabilityModifier: number;
    
    constructor(name: string, public baseDamage: number, private baseDurability: number, value: number, weight: number) {
        super(name, value, weight);
    }

    getDamage() {
        return this.damageModifier + this.baseDamage
    }

    getDurability() {
        return this.durabilityModifier + this.baseDurability
    }

    setDurability(durability: number) {
        this.durabilityModifier = durability;
    }

    isBroken() {
        return this.getDurability() <= 0
    }

    use() {
        const usageMsg = `You use the ${this.name}, dealing ${this.getDamage()} points of damage.`;

        if(this.isBroken()) {
            return `You can't use the ${this.name}, it is broken.`;
        }

        this.setDurability(this.getDurability() - Weapon.MODIFIER_CHANGE_RATE);
        
        if(this.getDurability() - Weapon.MODIFIER_CHANGE_RATE <= 0) {
            return `${usageMsg} \n The ${this.name} breaks.` 
        }
        
        return usageMsg;
    }

    toString() {
        return `${super.toString()} ${this.getDamage()} ${this.getDurability() * 100}%`
    }
}
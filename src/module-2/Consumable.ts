import { Item } from './Item';

export abstract class Consumable extends Item {
    private consumed = false;

    constructor(name: string, value: number, weight: number, private spoiled: boolean) {
        super(name, value, weight);
    }

    eat() {
        const ateText = 'You eat the bread.';

        if(this.isComsumed && !this.isSpoiled) {
            return `There is nothing left of the ${this.name} to consume.`
        } 
        
        if(this.isSpoiled && !this.isComsumed) {
            return `${ateText} \n You feel sick.`
        } 
        
        return ateText
    }
    use() {
        if(!this.isComsumed && !this.isSpoiled) {
            return this.value;
        }
    }
    isComsumed() {
        return this.consumed;
    }
    setConsumed(consumed: boolean) {
        this.consumed = consumed;
    }
    isSpoiled() {
        return this.spoiled;
    }
}

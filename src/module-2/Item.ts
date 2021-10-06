import { Comparable } from './Comparable';

let id = 0;
let numberOfItems = 0;

export abstract class Item implements Comparable<Item> {
    private id: number;

    constructor(public name: string, public value: number, public weight: number) {
        id++;
        this.id = id;
        numberOfItems++;
    }
    
    public compareTo(other: Item): number {
        if(this.value > other.value) {
            return 1;
        } else if (this.value < other.value) {
            return -1;
        } else {
            return this.name.toLowerCase().localeCompare(other.name.toLowerCase())
        }
    }

    use() {}

    public toString() {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`
    }

    static reset() {
        numberOfItems = 0;
    }

    // your code goes here
}

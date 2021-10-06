import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class Inventory {
    public items: Array<Item>
    
    constructor() {}

    addItem(item: Item){
        this.items.push(item);
    }

    sort(comparator?: ItemComparator) {
        if(comparator) {
            return this.items.sort(comparator.compare)
        }

        return this.items.sort((a,b) => a.value - b.value)
    }

    toString() {
        return this.items.join(', ')
    }
}
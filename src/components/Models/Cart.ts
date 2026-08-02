import {IProduct} from '../../types';

export class Cart {
    items: IProduct[] = [];
    getItems() {
        return this.items
    }

    addItem(item: IProduct) {
        this.items.push(item)
    }

    removeItem(id: string) {
        this.items = this.items.filter((product) => product.id !== id)
    }

    clear() {
        this.items = [];
    }

    getTotal() {
        let total = 0;
        for (const item of this.items) {
            if (item.price !== null) {total += item.price}
        }
        return total;
    }

    getCount() {
        return this.items.length
    }
    hasItem(id: string) {
        return this.items.some((item) => item.id === id)
    }
}

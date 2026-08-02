import {IProduct} from '../../types';

export class Cart {
    protected items: IProduct[] = [];

    getItems() {
        return this.items
    }

    addItem(item: IProduct): void {
        this.items.push(item)
    }

    removeItem(id: string): void {
        this.items = this.items.filter((product) => product.id !== id)
    }

    clear(): void {
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

import {IProduct} from '../../types';

export class Cart {
    protected items: IProduct[] = [];

    getItems(): IProduct[] {
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

    getTotal(): number {
        let total = 0;
        for (const item of this.items) {
            if (item.price !== null) {total += item.price}
        }
        return total;
    }

    getCount(): number {
        return this.items.length
    }

    hasItem(id: string): boolean {
        return this.items.some((item) => item.id === id)
    }
}

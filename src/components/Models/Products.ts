import {IProduct} from '../../types';

export class Products {
    protected items: IProduct[] = [];
    protected selected: IProduct | null = null;

    setItems(items: IProduct[]): void {
        this.items = items;
    }

    getItems() {
        return this.items
    }

    getItem(id: string) {
        return this.items.find((item) => item.id === id)
    }

    setSelected(item: IProduct): void {
        this.selected = item
    }

    getSelected() {
        return this.selected
    }
}

import {IProduct} from '../../types';

export class Products {
    items: IProduct[] = [];
    selected: IProduct | null = null;
    setItems(items: IProduct[]) {
        this.items = items;
    }

    getItems() {
        return this.items
    }

    getItem(id: string) {
        return this.items.find((item) => item.id === id)
    }

    setSelected(item: IProduct) {
        this.selected = item
    }
    getSelected() {
        return this.selected
    }
}

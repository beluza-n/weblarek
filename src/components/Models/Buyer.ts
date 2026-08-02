import {IBuyer, TPayment} from '../../types';

export class Buyer {
    protected payment: TPayment = '';
    protected email = '';
    protected phone = '';
    protected address = '';

    setData(data: Partial<IBuyer>) {
        if (data.payment !== undefined) {this.payment = data.payment}
        if (data.email !== undefined) {this.email = data.email}
        if (data.phone !== undefined) {this.phone = data.phone}
        if (data.address !== undefined) {this.address = data.address}
    }

    getData(): IBuyer {
        return {
            payment: this.payment,
            email: this.email,
            phone: this.phone,
            address: this.address
        }
    }

    clear() {
        this.payment = '';
        this.email = '';
        this.phone = '';
        this.address = '';
    }

    validate() {
        const errors: any = {};
        if (!this.payment) {errors.payment = 'Укажите вид оплаты'}
        if (!this.email) {errors.email = 'Укажите почту'}
        if (!this.phone) {errors.phone = 'Укажите телефон'}
        if (!this.address) {errors.address = 'Укажите адрес'}
        return errors
    }
}



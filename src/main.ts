import './scss/styles.scss';
import { Products } from './components/Models/Products';
import { Cart } from './components/Models/Cart';
import { Buyer } from './components/Models/Buyer';
import { apiProducts } from './utils/data';

const productsModel = new Products();
const cartModel = new Cart();
const buyerModel = new Buyer();

// Товары
productsModel.setItems(apiProducts.items);
console.log('Товары:', productsModel.getItems());

//выбранный товар
productsModel.setSelected(apiProducts.items[0]);
console.log('Выбранный товар:', productsModel.getSelected());

// Корзина
cartModel.addItem(apiProducts.items[0]);
cartModel.addItem(apiProducts.items[1]);
cartModel.addItem(apiProducts.items[3]); //[2] - третий товар не добавляем - у него цена null
console.log('Товары в корзине:', cartModel.getItems());
console.log('Количество товаров в корзине:', cartModel.getCount());
console.log('Сумма корзины:', cartModel.getTotal());
console.log('Есть ли товар [0]:', cartModel.hasItem(apiProducts.items[0].id));
console.log('Есть ли товар [2] (цена = null):', cartModel.hasItem(apiProducts.items[2].id));

cartModel.removeItem(apiProducts.items[3].id);
console.log('Корзина после удаления товара [3]:', cartModel.getItems());
console.log('Сумма после удаления:', cartModel.getTotal());

cartModel.clear();
console.log('Корзина после очистки:', cartModel.getItems());
console.log('Количество после очистки:', cartModel.getCount());

// покупатель
console.log('Данные покупателя (пусто):', buyerModel.getData());
console.log('Ошибки валидации (пусто):', buyerModel.validate());

buyerModel.setData({ payment: 'card' });
console.log('После сохранения только payment:', buyerModel.getData());
console.log('Ошибки, если заполнено одно поле payment:', buyerModel.validate());

buyerModel.setData({
    email: 'beluza@mail.ru',
    phone: '+75555555555',
    address: 'Ставрополь, Ленина 1',
});
console.log('Все поля:', buyerModel.getData());
console.log('Ошибки валидации (все заполнено - не должно быть ошибок):', buyerModel.validate());

buyerModel.clear();
console.log('Данные покупателя после очистки:', buyerModel.getData());


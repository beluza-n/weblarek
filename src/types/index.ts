export type ApiPostMethods = 'POST' | 'PUT' | 'DELETE';

export interface IApi {
    get<T extends object>(uri: string): Promise<T>;
    post<T extends object>(uri: string, data: object, method?: ApiPostMethods): Promise<T>;
}

export type TPayment = 'card' | 'cash' | '';

export interface IProduct {
    id: string;
    description: string;
    image: string;
    title: string;
    category: string;
    price: number | null;
}

export interface IBuyer {
    payment: TPayment;
    email: string;
    phone: string;
    address: string;
}

export type TBuyerErrors = Partial<Record<keyof IBuyer, string>>;

// ответ сервера на гет-запрос {{baseUrl}}/product/
export interface IProductsResponse {
    total: number;
    items: IProduct[];
}

// тело пост-запроса на /order/ — данные покупателя + сумма и id товаров
export interface IOrder extends IBuyer {
    total: number;
    items: string[];
}

// ответ сервера на пост-запрос на /order/
export interface IOrderResult {
    id: string;
    total: number;
}

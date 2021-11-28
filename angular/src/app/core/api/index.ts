import * as data from './products.json';

export interface IProduct {
  id: string;
  name: string;
  price: string;
  picture: string;
  tags: string[];
}

export class ProductsApi {
  products: IProduct[];

  constructor() {
    this.products = data;
  }

  getProducts(page: number, pageSize: number): IProduct[] {
    if (page < 1) {
      throw Error('The page value should be > 0');
    }

    const start: number = (page - 1) * pageSize;
    const end: number = page * pageSize;
    return this.products.slice(start, end);
  }
}

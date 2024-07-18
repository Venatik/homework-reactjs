interface Rating {
  rate: number;
  count: number;
}

export enum Category {
  ELECTRONICS = "Electronics",
  JEWELERY = "Jewelery",
  MENSCLOTHING = "Men's clothing",
  WOMENSCLOTHING = "Women's clothing",
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: Rating;
}

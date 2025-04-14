// types/product.type.ts
export interface Product {
    id: number;
    title: string;
    price: number;
    description?: string ;
    category?: string | undefined;
    imageUrl: string;
    rating: {
      rate: number;
      count: number;
    };
    storeName?: string;
  }
  
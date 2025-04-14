

// File : src/type/Product.ts 
export interface Product {
  id: string
  title: string
  price: number;
  description?: string;
  imageUrl: string;
  category?: string | undefined;
  rating: {
    rate: number;
    count: number;
  };
  storeName?: string;
}

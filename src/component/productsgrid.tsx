import { Product } from "@/type/Product";
import { ProductCard } from "./productcard.component";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow">
        <p className="text-gray-500">No products found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={{
            ...product,
            imageUrl: product.imageUrl,
            rating: product.rating || { rate: 0, count: 0 },
          }}
        />
      ))}
    </div>
  );
}
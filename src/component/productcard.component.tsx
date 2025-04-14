// File : src/component/productcard.component.tsx
'use client';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { StarIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import { Button } from './UI/button'; 
import { Product } from '../type/Product';

interface ProductCardProps {
  product: Product;
  imageHeight?: string; 
  showRating?: boolean; 
  buttonText?: string; 
  className?: string; 
}

export const ProductCard = ({
  product,
  imageHeight = 'h-48',
  showRating = true,
  buttonText = 'Add to Cart',
  className = '',
}: ProductCardProps) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const isAuthenticated = status === 'authenticated';

  const handleProductClick = () => {
    router.push(`/products/${product.id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!isAuthenticated) {
      toast.error('Please sign in to add items to cart');
      return;
    }

    // Add to cart logic for authenticated users
    toast.success(`${product.title} added to cart!`);
    /*
    // Actual implementation:
    try {
      await addToCart({
        userId: session.user.id,
        productId: product.id,
        quantity: 1,
      });
      toast.success(`${product.title} added to cart!`);
    } catch (error) {
      toast.error('Failed to add item to cart');
    }
    */
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg border border-gray-100 cursor-pointer ${className}`}
      onClick={handleProductClick}
    >
      <div className={`relative w-full ${imageHeight}`}>
        <Image
          src={product.imageUrl || '/placeholder.svg'}
          alt={product.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-800 mb-1 truncate">{product.title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-sky-600 font-bold">${product.price.toFixed(2)}</p>
          {product.storeName && (
            <p className="text-gray-500 text-sm">{product.storeName}</p>
          )}
        </div>
        {showRating && (
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`h-4 w-4 ${
                  i < Math.round(product.rating.rate)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-xs text-gray-500 ml-1">
              ({product.rating.count})
            </span>
          </div>
        )}
        <Button
          size="sm"
          variant="primary"
          className="w-full mt-3 bg-sky-600 hover:bg-sky-700 text-white"
          onClick={handleAddToCart}
          icon={<ShoppingCart className="h-4 w-4 mr-2" />}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

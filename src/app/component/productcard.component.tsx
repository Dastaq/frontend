'use client';
import Image from 'next/image';
import { StarIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Product } from '../type/product.type';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';

export const ProductCard = ({ product }: { product: Product }) => {
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
        quantity: 1
      });
      toast.success(`${product.title} added to cart!`);
    } catch (error) {
      toast.error('Failed to add item to cart');
    }
    */
  };

  return (
    <div 
      className="group relative bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100 cursor-pointer"
      onClick={handleProductClick}
    >
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-200">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
       
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-1">{product.title}</h3>
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`h-4 w-4 ${i < Math.round(product.rating.rate) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">({product.rating.count})</span>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <div>
            <p className="text-lg font-bold text-gray-900">${product.price}</p>
            {product.price > 50 && (
              <p className="text-xs text-green-600">Save 10%</p>
            )}
          </div>
          <button 
            className="p-2 rounded-full bg-gray-100 hover:bg-indigo-100 text-indigo-600 transition-colors"
            onClick={handleAddToCart}
          >
            <ShoppingBagIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};


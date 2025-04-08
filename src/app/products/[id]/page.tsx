'use client';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import Image from 'next/image';
import { FiShoppingCart, FiArrowRight, FiStar, FiUserPlus } from 'react-icons/fi';
import { BsPatchCheckFill, BsCurrencyDollar } from 'react-icons/bs';
import { Spinner } from '@/app/component/UI/spinner';
// import Spinner from '@/app/component/UI/spinner';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default function ProductDetail() {
  const { id } = useParams();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const isAuthenticated = status === 'authenticated';

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
        toast.error("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast.error('Sign in to add items to your cart');
      return;
    }
    toast.success(`${product?.title} added to cart!`);
  };

  const handleOrderNow = () => {
    if (!isAuthenticated) {
      toast.error('Sign in to place your order');
      return;
    }
    router.push(`/order?productId=${id}`);
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <Spinner />
    </div>
  );

  if (!product) return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
      <p className="text-gray-600 mb-6">We couldn't find the product you're looking for</p>
      <button 
        onClick={() => router.push('/products')}
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
      >
        Browse Products <FiArrowRight />
      </button>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-12">
        {/* Product Image */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="aspect-square relative">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        
        {/* Product Info */}
        <div className="mt-10 lg:mt-0">
          <h1 className="text-3xl font-bold text-gray-900 font-heading">{product.title}</h1>
          
          {/* Rating */}
          <div className="mt-4 flex items-center">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`w-5 h-5 ${i < Math.round(product.rating.rate) ? 'fill-current' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600">({product.rating.count} reviews)</span>
          </div>
          
          {/* Description */}
          <p className="mt-6 text-gray-700 leading-relaxed">{product.description}</p>
          
          {/* Price */}
          <div className="mt-6 flex items-center">
            <BsCurrencyDollar className="text-2xl text-gray-900 mr-1" />
            <p className="text-3xl font-bold text-gray-900">{product.price}</p>
            {product.price > 50 && (
              <span className="ml-3 px-2 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full flex items-center">
                <BsPatchCheckFill className="mr-1" /> Save 10%
              </span>
            )}
          </div>

          {/* Auth Prompt */}
          {!isAuthenticated && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-blue-800 font-medium">
                Sign in for exclusive deals and faster checkout!
              </p>
              <button
                onClick={() => router.push('/signup')}
                className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <FiUserPlus /> Create Account
              </button>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-3 font-medium"
            >
              <FiShoppingCart className="w-5 h-5" /> Add to Cart
            </button>
            <button
              onClick={handleOrderNow}
              className="flex-1 bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-3 font-medium"
            >
              Buy Now <FiArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
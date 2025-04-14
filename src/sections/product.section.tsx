



'use client';
import { useEffect, useState } from 'react';
import { Product } from '../type/Product'; 
import { ProductCard } from '../component/productcard.component';
import { Button } from '../component/UI/button';

const fetchProducts = async () => {
  try {
    const res = await fetch(process.env.MONGODB_URI 
      ? 'mongodb-api-endpoint' 
      : 'https://fakestoreapi.com/products?limit=8');
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };
    loadData();
  }, []);

  const curatedSections = [
    { 
      title: "Best Sellers", 
      items: products.slice(0, 4),
      accent: "from-indigo-500 to-purple-600"
    },
    { 
      title: "New Arrivals", 
      items: products.slice(4, 8),
      accent: "from-emerald-500 to-teal-600"
    },
    { 
      title: "Deals of the Day", 
      subtitle: "Ends in 4h!",
      items: products.filter(p => p.price < 50).slice(0, 4),
      accent: "from-rose-500 to-pink-600"
    }
  ];

  if (loading) return (
    <div className="py-20 text-center">
      <div className="animate-pulse font-montserrat text-2xl font-bold text-gray-700">
        Loading our premium collection... 😊
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-poppins text-4xl font-bold text-gray-900 mb-3">
            Discover Our Collection
          </h1>
          <p className="font-montserrat text-lg text-gray-600 max-w-3xl mx-auto">
            Handpicked selections for every style and occasion
          </p>
        </div>

        {curatedSections.map((section) => (
          <div key={section.title} className="mb-20">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <div className={`bg-gradient-to-r ${section.accent} h-8 w-2 rounded-full mr-3`}></div>
                <h2 className="font-poppins text-3xl font-bold text-gray-900">
                  {section.title}
                </h2>
              </div>
              {section.subtitle && (
                <div className="flex items-center">
                  <span className="animate-pulse h-3 w-3 rounded-full bg-red-500 mr-2"></span>
                  <p className="font-montserrat text-base font-semibold text-red-600">
                    {section.subtitle}
                  </p>
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {section.items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button
                className={`font-montserrat font-medium bg-gradient-to-r ${section.accent} text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
                onClick={() => alert(`View all ${section.title}`)}
                >
                <p className="flex items-center gap-2">
                   View all {section.title}
                </p>
              </Button>
            </div>
          </div>


        ))}
      </div>
    </div>
  );
}
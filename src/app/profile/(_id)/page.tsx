// // File path: src/app/profile/[id]/page.tsx
// "use client"
// import { useState, useEffect } from "react"
// import { fetchUserProfile, fetchUserCart, fetchUserWishlist, fetchFavoriteStoreProducts } from "@/lib/api"
// import { Spinner } from "@/component/UI/spinner"
// import ErrorMessage from "@/component/UI/errormassage"
// import ProductGrid from "@/component/productsgrid"
// import { User } from "@/type/type"
// import { Avatar, AvatarFallback, AvatarImage } from "@/component/UI/avater"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/component/UI/tab"
// import { Product } from "@/type/product.type"

// export default function UserProfile() {
//   const [user, setUser] = useState<User | null>(null)
//   const [cartProducts, setCartProducts] = useState<Product[]>([])
//   const [wishlistProducts, setWishlistProducts] = useState<Product[]>([])
//   const [favoriteStoreProducts, setFavoriteStoreProducts] = useState<Product[]>([])
//   const [activeTab, setActiveTab] = useState("cart")
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     const loadUserData = async () => {
//       try {
//         setLoading(true)
//         const userData = await fetchUserProfile()
//         setUser(userData)

//         // Load initial tab data
//         const cartData = await fetchUserCart()
//         setCartProducts(cartData)

//         setLoading(false)
//       } catch (err) {
//         setError("Failed to load user profile data")
//         setLoading(false)
//       }
//     }

//     loadUserData()
//   }, [])

//   const handleTabChange = async (value: string) => {
//     setActiveTab(value)

//     if (value === "wishlist" && wishlistProducts.length === 0) {
//       try {
//         setLoading(true)
//         const data = await fetchUserWishlist()
//         setWishlistProducts(data)
//         setLoading(false)
//       } catch (err) {
//         setError("Failed to load wishlist data")
//         setLoading(false)
//       }
//     } else if (value === "favoriteStore" && favoriteStoreProducts.length === 0) {
//       try {
//         setLoading(true)
//         const data = await fetchFavoriteStoreProducts()
//         setFavoriteStoreProducts(data)
//         setLoading(false)
//       } catch (err) {
//         setError("Failed to load favorite store data")
//         setLoading(false)
//       }
//     }
//   }

//   if (error) {
//     return <ErrorMessage message={error} />
//   }

//   return (
//     <div className="container mx-auto px-4 py-8 max-w-6xl">
//       {loading && !user ? (
//         <div className="flex justify-center items-center h-64">
//           <Spinner/>
//         </div>
//       ) : (
//         <>
//           <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//             <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
//               <Avatar className="w-24 h-24 border-4 border-sky-100">
//                 <AvatarImage src={user?.avatarUrl || "/placeholder.svg"} alt={user?.name} />
//                 <AvatarFallback className="bg-sky-100 text-sky-800 text-xl">
//                   {user?.name?.charAt(0) || "U"}
//                 </AvatarFallback>
//               </Avatar>
//               <div className="text-center sm:text-left">
//                 <h1 className="text-2xl font-bold text-gray-800">{user?.name || "User Name"}</h1>
//                 <p className="text-gray-600">{user?.email || "email@example.com"}</p>
//               </div>
//             </div>
//           </div>

//           <Tabs defaultValue="cart" value={activeTab} onValueChange={handleTabChange} className="w-full">
//             <TabsList className="grid w-full grid-cols-3 mb-8">
//               <TabsTrigger value="cart" className="data-[state=active]:bg-sky-600 data-[state=active]:text-white">
//                 Cart
//               </TabsTrigger>
//               <TabsTrigger value="wishlist" className="data-[state=active]:bg-sky-600 data-[state=active]:text-white">
//                 Wishlist
//               </TabsTrigger>
//               <TabsTrigger
//                 value="favoriteStore"
//                 className="data-[state=active]:bg-sky-600 data-[state=active]:text-white"
//               >
//                 Favorite Store
//               </TabsTrigger>
//             </TabsList>

//             <TabsContent value="cart">
//               {loading ? <Spinner /> : <ProductGrid products={cartProducts} />}
//             </TabsContent>

//             <TabsContent value="wishlist">
//               {loading ? <Spinner /> : <ProductGrid products={wishlistProducts} />}
//             </TabsContent>

//             <TabsContent value="favoriteStore">
//               {loading ? <Spinner /> : <ProductGrid products={favoriteStoreProducts} />}
//             </TabsContent>
//           </Tabs>
//         </>
//       )}
//     </div>
//   )
// }


















































// File path: src/app/profile/[id]/page.tsx
"use client"
import { useState, useEffect } from "react"
import { fetchUserProfile, fetchUserCart, fetchUserWishlist, fetchFavoriteStoreProducts } from "@/lib/api"
import { Spinner } from "@/component/UI/spinner"
import ErrorMessage from "@/component/UI/errormassage"
import ProductGrid from "@/component/productsgrid"
import { User } from "@/type/user"
import { Avatar, AvatarFallback, AvatarImage } from "@/component/UI/avater"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/component/UI/tab"
import { Product } from "@/type/Product"

export default function UserProfile() {
  const [user, setUser] = useState<User | null>(null)
  const [cartProducts, setCartProducts] = useState<Product[]>([])
  const [wishlistProducts, setWishlistProducts] = useState<Product[]>([])
  const [favoriteStoreProducts, setFavoriteStoreProducts] = useState<Product[]>([])
  const [activeTab, setActiveTab] = useState("cart")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadUserData = async () => {
      try {
        setLoading(true)
        const userData = await fetchUserProfile()
        setUser(userData)

        // Load initial tab data
        const cartData = await fetchUserCart()
        // Ensure the data matches the Product type
        const normalizedCartData = cartData.map(product => ({
          ...product,
          id: Number(product.id), 
          imageUrl: product.imageUrl || '',
          storeName: product.storeName || '',
          price: Number(product.price),
          rating: product.rating || { rate: 0, count: 0 }
        }))
        setCartProducts(normalizedCartData)

        setLoading(false)
      } catch (err) {
        setError("Failed to load user profile data")
        setLoading(false)
      }
    }

    loadUserData()
  }, [])

  const handleTabChange = async (value: string) => {
    setActiveTab(value)

    if (value === "wishlist" && wishlistProducts.length === 0) {
      try {
        setLoading(true)
        const data = await fetchUserWishlist()
        const normalizedData = data.map(product => ({
          ...product,
          id: Number(product.id),
          imageUrl: product.imageUrl || '',
          storeName: product.storeName || '',
          price: Number(product.price),
          rating: product.rating || { rate: 0, count: 0 }
        }))
        setWishlistProducts(normalizedData)
        setLoading(false)
      } catch (err) {
        setError("Failed to load wishlist data")
        setLoading(false)
      }
    } else if (value === "favoriteStore" && favoriteStoreProducts.length === 0) {
      try {
        setLoading(true)
        const data = await fetchFavoriteStoreProducts()
        const normalizedData = data.map(product => ({
          ...product,
          id: Number(product.id),
          imageUrl: product.imageUrl || '',
          storeName: product.storeName || '',
          price: Number(product.price),
          rating: product.rating || { rate: 0, count: 0 }
        }))
        setFavoriteStoreProducts(normalizedData)
        setLoading(false)
      } catch (err) {
        setError("Failed to load favorite store data")
        setLoading(false)
      }
    }
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {loading && !user ? (
        <div className="flex justify-center items-center h-64">
          <Spinner/>
        </div>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <Avatar className="w-24 h-24 border-4 border-sky-100">
                <AvatarImage src={user?.avatarUrl || "/placeholder.svg"} alt={user?.name} />
                <AvatarFallback className="bg-sky-100 text-sky-800 text-xl">
                  {user?.name?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
              <div className="text-center sm:text-left">
                <h1 className="text-2xl font-bold text-gray-800">{user?.name || "User Name"}</h1>
                <p className="text-gray-600">{user?.email || "email@example.com"}</p>
              </div>
            </div>
          </div>

          <Tabs defaultValue="cart" value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="cart" className="data-[state=active]:bg-sky-600 data-[state=active]:text-white">
                Cart
              </TabsTrigger>
              <TabsTrigger value="wishlist" className="data-[state=active]:bg-sky-600 data-[state=active]:text-white">
                Wishlist
              </TabsTrigger>
              <TabsTrigger
                value="favoriteStore"
                className="data-[state=active]:bg-sky-600 data-[state=active]:text-white"
              >
                Favorite Store
              </TabsTrigger>
            </TabsList>
            <TabsContent value="cart">
              {loading ? <Spinner /> : <ProductGrid products={cartProducts} />}
            </TabsContent>
            <TabsContent value="wishlist">
              {loading ? <Spinner /> : <ProductGrid products={wishlistProducts} />}
            </TabsContent>
            <TabsContent value="favoriteStore">
              {loading ? <Spinner /> : <ProductGrid products={favoriteStoreProducts} />}
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  )
}

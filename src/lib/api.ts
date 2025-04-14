// import { Product, User } from "@/type/User.ts"

import { Product } from "@/type/Product"
import { User } from "@/type/user"


// Simulated API calls with mock data
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function fetchUserProfile(): Promise<User> {
  await delay(800) 

  return {
    id: "1",
    name: "Zayyan Mustafa",
    email: "zayyanmustafa@example.com",
    avatarUrl: "/placeholder.svg?height=200&width=200",
  }
}

export async function fetchUserCart(): Promise<Product []> {
  await delay(1000)

  return [
    {
      id: "1",
      title: "Wireless Headphones",
      price: 129.99,
      imageUrl: "/placeholder.svg?height=300&width=300",
      storeName: "Audio Tech",
    },
    {
      id: "2",
      title: "Smart Watch",
      price: 199.99,
      imageUrl: "/placeholder.svg?height=300&width=300",
      storeName: "Gadget World",
    },
    {
      id: "3",
      title: "Portable Charger",
      price: 49.99,
      imageUrl: "/placeholder.svg?height=300&width=300",
      storeName: "Power Plus",
    },
  ]
}

export async function fetchUserWishlist(): Promise<Product[]> {
  await delay(1000)

  return [
    {
      id: "4",
      title: "Laptop Backpack",
      price: 79.99,
      imageUrl: "/placeholder.svg?height=300&width=300",
      storeName: "Travel Gear",
    },
    {
      id: "5",
      title: "Mechanical Keyboard",
      price: 149.99,
      imageUrl: "/placeholder.svg?height=300&width=300",
      storeName: "PC Accessories",
    },
    {
      id: "6",
      title: "Wireless Mouse",
      price: 39.99,
      imageUrl: "/placeholder.svg?height=300&width=300",
      storeName: "PC Accessories",
    },
    {
      id: "7",
      title: "Monitor Stand",
      price: 59.99,
      imageUrl: "/placeholder.svg?height=300&width=300",
      storeName: "Office Solutions",
    },
  ]
}

export async function fetchFavoriteStoreProducts(): Promise<Product[]> {
  await delay(1000)

  return [
    {
      id: "8",
      title: "Bluetooth Speaker",
      price: 89.99,
      imageUrl: "/placeholder.svg?height=300&width=300",
      storeName: "Audio Tech",
    },
    {
      id: "9",
      title: "Noise Cancelling Earbuds",
      price: 159.99,
      imageUrl: "/placeholder.svg?height=300&width=300",
      storeName: "Audio Tech",
    },
    {
      id: "10",
      title: "Wireless Charger",
      price: 29.99,
      imageUrl: "/placeholder.svg?height=300&width=300",
      storeName: "Audio Tech",
    },
    {
      id: "11",
      title: "Smart Speaker",
      price: 119.99,
      imageUrl: "/placeholder.svg?height=300&width=300",
      storeName: "Audio Tech",
    },
    {
      id: "12",
      title: "Audio Interface",
      price: 199.99,
      imageUrl: "/placeholder.svg?height=300&width=300",
      storeName: "Audio Tech",
    },
  ]
}

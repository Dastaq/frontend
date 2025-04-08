


import { NavConfig } from "../type/primarynavbar";
  export const NAV_CONFIG: NavConfig = {
    brand: {
      name: "PakBay",
      href: "/",
    },
    categories: [
      {
        name: "Electronics",
        href: "/category/electronics",
        subItems: [
          {
            title: "By Type",
            items: [
              { name: "Smartphones", href: "/category/electronics/smartphones" },
              { name: "Laptops", href: "/category/electronics/laptops" },
            ],
          },
          {
            title: "By Brand",
            items: [
              { name: "Apple", href: "/brand/apple" },
              { name: "Samsung", href: "/brand/samsung" },
            ],
          },
        ],
      },
      {
        name: "Fashion",
        href: "/category/fashion",
        subItems: [
          {
            title: "Men",
            items: [
              { name: "Shirts", href: "/category/fashion/men/shirts" },
              { name: "Pants", href: "/category/fashion/men/pants" },
            ],
          },
          {
            title: "Women",
            items: [
              { name: "Dresses", href: "/category/fashion/women/dresses" },
              { name: "Accessories", href: "/category/fashion/women/accessories" },
            ],
          },
        ],
      },
    ],
    vendorPortal: {
      name: "Sell With Us",
      href: "/vendor/signup",
    },
    authLinks: {
      login: {
        name: "Sign In",
        href: "/login",
      },
      register: {
        name: "Register",
        href: "/register",
      },
    }, 
    userMenu: {
      dashboard: "Dashboard",
      orders: "My Orders",
      wishlist: "Wishlist",
      messages: "Messages",
      logout: "Sign Out",
    },
  };

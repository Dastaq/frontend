// constants/footer.constants.ts

import { BrandName } from "@/component/brandname";
import { Target } from "lucide-react";

export const BRAND_NAME = <BrandName/>;

export const FOOTER_LINKS = {
  shop: {
    title: "Shop",
    links: [
      { name: "All Products", href: "/products" },
      { name: "New Arrivals", href: "/new" },
      { name: "Best Sellers", href: "/bestsellers" },
      { name: "Special Offers", href: "/offers" },
    ],
  },
  help: {
    title: "Help",
    links: [
      { name: "FAQs", href: "/faq" },
      { name: "Shipping", href: "/shipping" },
      { name: "Returns", href: "/returns" },
      { name: "Size Guide", href: "/size-guide" },
    ],
  },
  about: {
    title: "About",
    links: [
      { name: "Our Story", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  },
};

export const SOCIAL_MEDIA = [
  { name: "Facebook", href: "/......",  target:'blank',  icon: "facebook" },
  { name: "Instagram", href: "/......",  target:'blank',  icon: "instagram" },
  { name: "Twitter", href: "/......",  target:'blank',  icon: "twitter" },
  { name: "Pinterest", href: "/......",  target:'blank',  icon: "pinterest" },
];

export const PAYMENT_METHODS = [
  { name: "Visa", icon: "visa" },
  { name: "Mastercard", icon: "mastercard" },
  { name: "PayPal", icon: "paypal" },
  { name: "Apple Pay", icon: "applepay" },
  { name: "Google Pay", icon: "googlepay" },
];

export const NEWSLETTER = {
  title: "Join Our Newsletter",
  description: "Get 10% off your first order when you subscribe",
  buttonText: "Subscribe",
  privacyText: "We'll never share your email. Unsubscribe anytime.",
};
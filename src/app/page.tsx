


import { OfferBanner } from "@/component/offerBanner.component";
import FooterSection from "@/sections/Footer.section";
import HeroSection from "@/sections/Hero.section";
import NavbarSection from "@/sections/Navbar.section";
import ProductGrid from "@/sections/Product.section";

export default function Home() {
  return (
    <>
      <OfferBanner />
      <NavbarSection />
      <HeroSection />
      <ProductGrid />
      <FooterSection />
    </>
  );
}

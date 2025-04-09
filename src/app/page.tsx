

// Importing necessary components and styles
import { OfferBanner } from "@/component/OfferBanner.component.tsx";
import { Spinner } from "@/component/UI/spinner";
import FooterSection from "@/sections/footer.section";
import HeroSection from "@/sections/hero.section";
import NavbarSection from "@/sections/navbar.section";
import ProductGrid from "@/sections/product.section";

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

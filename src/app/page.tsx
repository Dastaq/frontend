

// Importing necessary components and styles
import { OfferLine } from "@/component/offerline.component";
import { Spinner } from "@/component/UI/spinner";
import FooterSection from "@/sections/footer.section";
import HeroSection from "@/sections/hero.section";
import NavbarSection from "@/sections/navbar.section";
import ProductGrid from "@/sections/product.section";

export default function Home() {
  return (


    <>
    
      <OfferLine />
      <NavbarSection />
      <HeroSection />
      <ProductGrid />
      <FooterSection />

    </>


  );
}

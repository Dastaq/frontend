import HeroSection from "./sections/hero.section";
import ProductGrid from "./sections/product.section";
import FooterSection from "./sections/footer.section";
import { OfferLine } from "./component/offerline.component";

export default function Home() {
  return (
      <>
      
        {/* <Navbar/> */}
        <OfferLine/>
        <HeroSection/>
        <ProductGrid/>
        <FooterSection/>

      </>


  );
}

import HeroSection from "./sections/hero.section";
import ProductGrid from "./sections/product.section";
import FooterSection from "./sections/footer.section";
import { OfferLine } from "./component/offerline.component";
import TopAnnouncementBar from "./component/announcement.component";
import NavbarSection from "./sections/navbar.section";

export default function Home() {
  return (
      <>
      
        <OfferLine/>
        <NavbarSection/>
        <HeroSection/>
        <ProductGrid/>
        <FooterSection/>

      </>


  );
}

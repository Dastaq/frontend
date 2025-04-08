
import { BrandName } from '../brandname';
import Footer from '../component/footer.component';
import { FOOTER_LINKS , SOCIAL_MEDIA, PAYMENT_METHODS } from '../constant/footer.constant';

const FooterSection = () => {

  return (
    <Footer
      footerLinks={FOOTER_LINKS}
      socialMedia={SOCIAL_MEDIA}
      paymentMethods={PAYMENT_METHODS}
      newsletterText={{
        title: "Join Our Newsletter",
        description: "Subscribe for exclusive offers, new arrivals, and style inspiration.",
        privacyText: "By subscribing, you agree to our Privacy Policy.",
        buttonText: "Subscribe"
      }}
      copyrightText= {`© ${new Date().getFullYear()  } ${ <BrandName/>} All rights reserved.`}
    />
  );
};

export default FooterSection;    
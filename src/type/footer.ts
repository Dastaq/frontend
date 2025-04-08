export interface FooterLinkSection {
    title: string;
    links: {
      name: string;
      href: string;
    }[];
  }
  
  export interface SocialMediaLink {
    name: string;
    href: string;
    icon: string;
  }
  
  export interface PaymentMethod {
    name: string;
    icon: string;
  }
  
  export interface NewsletterText {
    title: string;
    description: string;
    privacyText: string;
    buttonText: string;
  }
  
  export interface FooterProps {
    footerLinks: Record<string, FooterLinkSection>;
    socialMedia: SocialMediaLink[];
    paymentMethods: PaymentMethod[];
    newsletterText: NewsletterText;
    copyrightText: string ;
  }
export interface NavItem {
    name: string;
    href: string;
    subItems?: {
      title: string;
      items: {
        name: string;
        href: string;
        description?: string;
      }[];
    }[];
  }
  
  export interface NavConfig {
    brand: {
      name: string;
      logo?: string;
      href: string;
    };
    categories: NavItem[];
    vendorPortal: {
      name: string;
      href: string;
    };
    authLinks: {
      login: {
        name: string;
        href: string;
      };
      register: {
        name: string;
        href: string;
      };
    };
    userMenu: {
      dashboard: string;
      orders: string;
      wishlist: string;
      messages: string;
      logout: string;
    };
  }

  
// File: type/navbar.type.ts
import { ReactNode } from 'react';

export interface NavItem {
  id: string;
  label: string;
  href?: string;
  icon?: React.ReactNode;
  isMegaMenu?: boolean;
  isVendorAction?: boolean;
  description?: string;
  columns?: {
    title: string;
    titleIcon?: React.ReactNode;
    items: {
      label: string;
      href: string;
      icon?: React.ReactNode;
      badge?: {
        text: string;
        color: string;
      };
      description?: string;
      subItems?: {
        label: string;
        href: string;
      }[];
    }[];
    viewAll?: {
      label: string;
      href: string;
    };
    footerText?: string;
  }[];
  children?: NavItem[];
}


export interface MegaMenuColumn {
  title: string;
  items: MegaMenuItem[];
  viewAll?: {
    label: string;
    href: string;
  };
}

export interface MegaMenuItem {
  label: string;
  href: string;
  icon?: ReactNode;
  isHot?: boolean;
  isNew?: boolean;
  description?: string;
}



// PrimaryNavProps interface for the PrimaryNav component
export interface PrimaryNavProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  toggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}


// CategoryNavigationProps interface for the CategoryNavigation component
export interface CategoryNavigationProps {
  isMobileMenuOpen: boolean
  activeMenu: string | null
  setActiveMenu: (id: string | null) => void
  renderMegaMenu: (item: NavItem) => React.ReactNode
  renderNavItem: (item: NavItem, depth?: number) => React.ReactNode
}

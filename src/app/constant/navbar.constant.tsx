// File: constant/navbar.constant.ts
import { NavItem } from '../type/navbar.type';
import { FaTshirt, FaHome, FaIndustry, FaCertificate, FaBox, FaUser, FaStore} from 'react-icons/fa';
import { MdOutlineComputer, MdElectricalServices } from 'react-icons/md';
import { FaListAlt, FaCrown, FaUsers, FaMedal, FaCheckCircle, FaChartLine, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';
import { FaHeart, FaShippingFast, FaSearchDollar, FaCreditCard } from 'react-icons/fa';
import { FaShieldAlt } from 'react-icons/fa';


export const NAV_ITEMS: NavItem[] = [
  {
    id: 'categories',
    label: 'Categories',
    isMegaMenu: true,
    columns: [
      {
        title: 'Popular Categories',
        titleIcon: <FaListAlt size={16} />,
        items: [
          { 
            label: 'Electronics', 
            href: '/electronics', 
            icon: <MdOutlineComputer size={18} />, 
            badge: {
              text: 'Hot',
              color: '#ff4d4f'
            },
            description: 'Discover the latest electronic gadgets and components',
            subItems: [
              { label: 'Smartphones', href: '/electronics/smartphones' },
              { label: 'Laptops', href: '/electronics/laptops' },
              { label: 'Audio Devices', href: '/electronics/audio' },
              { label: 'Cameras', href: '/electronics/cameras' }
            ]
          },
          { 
            label: 'Apparel', 
            href: '/apparel', 
            icon: <FaTshirt size={18} />,
            description: 'Fashion clothing for all ages and styles',
            subItems: [
              { label: "Men's Clothing", href: '/apparel/mens' },
              { label: "Women's Clothing", href: '/apparel/womens' },
              { label: "Children's Wear", href: '/apparel/children' }
            ]
          },
          { 
            label: 'Home & Garden', 
            href: '/home-garden', 
            icon: <FaHome size={18} />,
            badge: {
              text: 'New',
              color: '#52c41a'
            },
            description: 'Everything for your home improvement needs',
            subItems: [
              { label: 'Furniture', href: '/home-garden/furniture' },
              { label: 'Lighting', href: '/home-garden/lighting' },
              { label: 'Kitchenware', href: '/home-garden/kitchen' }
            ]
          },
          { 
            label: 'Industrial Supplies',
            href: '/industrial',
            icon: <FaIndustry size={18} />,
            description: 'Machinery, tools and industrial equipment',
            subItems: [
              { label: 'Power Tools', href: '/industrial/tools' },
              { label: 'Safety Equipment', href: '/industrial/safety' },
              { label: 'HVAC Systems', href: '/industrial/hvac' }
            ]
          },
          { 
            label: 'Health & Beauty',
            href: '/health-beauty',
            icon: <FaHeart size={18} />,
            description: 'Cosmetics, personal care and wellness products',
            subItems: [
              { label: 'Skincare', href: '/health-beauty/skincare' },
              { label: 'Hair Care', href: '/health-beauty/hair' },
              { label: 'Vitamins', href: '/health-beauty/vitamins' }
            ]
          }
        ],
        viewAll: { 
          label: 'Browse All Categories',
          href: '/categories',
        },
        footerText: 'Over 10,000 products across 50+ categories'
      },
      {
        title: 'Featured Services',
        titleIcon: <FaCrown size={16} />,
        items: [
          { 
            label: 'Trade Assurance', 
            href: '/trade-assurance', 
            icon: <FaShieldAlt size={18} />,
            description: 'Order protection from payment to delivery',
            subItems: [
              { label: 'How It Works', href: '/trade-assurance/how-it-works' },
              { label: 'Claim Process', href: '/trade-assurance/claims' }
            ]
          },
          { 
            label: 'Logistics Services',
            href: '/logistics',
            icon: <FaShippingFast size={18} />,
            description: 'Global shipping and logistics solutions',
            subItems: [
              { label: 'Shipping Rates', href: '/logistics/rates' },
              { label: 'Tracking', href: '/logistics/tracking' }
            ]
          },
          { 
            label: 'Inspection Solutions',
            href: '/inspection',
            icon: <FaSearchDollar size={18} />,
            description: 'Quality control and product inspections',
            subItems: [
              { label: 'Book Inspection', href: '/inspection/book' },
              { label: 'Inspection Types', href: '/inspection/types' }
            ]
          },
          { 
            label: 'Payment Solutions',
            href: '/payment',
            icon: <FaCreditCard size={18} />,
            description: 'Secure and flexible payment options',
            subItems: [
              { label: 'Payment Methods', href: '/payment/methods' },
              { label: 'Currency Options', href: '/payment/currency' }
            ]
          }
        ]
      },
      {
        title: 'Supplier Network',
        titleIcon: <FaUsers size={16} />,
        items: [
          { 
            label: 'Gold Suppliers', 
            href: '/gold-suppliers', 
            icon: <FaMedal size={18} />,
            description: 'Verified premium suppliers with excellent service',
            subItems: [
              { label: 'Benefits', href: '/gold-suppliers/benefits' },
              { label: 'Requirements', href: '/gold-suppliers/requirements' }
            ]
          },
          { 
            label: 'Verified Suppliers',
            href: '/verified',
            icon: <FaCheckCircle size={18} />,
            description: 'Authenticated business profiles',
            subItems: [
              { label: 'Verification Process', href: '/verified/process' },
              { label: 'Trust Badges', href: '/verified/badges' }
            ]
          },
          { 
            label: 'Trending Suppliers',
            href: '/trending',
            icon: <FaChartLine size={18} />,
            description: 'Most popular suppliers this week',
            subItems: [
              { label: 'Weekly Highlights', href: '/trending/highlights' },
              { label: 'Previous Weeks', href: '/trending/archive' }
            ]
          },
          { 
            label: 'Local Suppliers',
            href: '/local',
            icon: <FaMapMarkerAlt size={18} />,
            description: 'Find suppliers near your location',
            subItems: [
              { label: 'By Region', href: '/local/regions' },
              { label: 'By Country', href: '/local/countries' }
            ]
          }
        ],

      }
    ]
  },
  {
    id: 'services',
    label: 'Services',
    icon: <MdElectricalServices size={16} />,
    children: [
      { 
        id: 'trade-services',
        label: 'Trade Services',
        href: '/trade-services',
        icon: <FaCertificate size={16} />,
        children: [
          { 
            id: 'secure-payment',
            label: 'Secure Payment', 
            href: '/secure-payment',
            description: 'Protected transactions for buyers and sellers'
          },
          { 
            id: 'inspection',
            label: 'Inspection', 
            href: '/inspection',
            description: 'Quality verification before shipment'
          },
          { 
            id: 'logistics',
            label: 'Logistics', 
            href: '/logistics',
            description: 'Global shipping and customs clearance'
          }
        ]
      },
      { 
        id: 'business-services',
        label: 'Business Services',
        href: '/business-services',
        icon: <FaBox size={16} />,
        children: [
          { 
            id: 'marketing',
            label: 'Marketing Solutions', 
            href: '/marketing',
            description: 'Boost your online presence and sales'
          },
          { 
            id: 'rfq',
            label: 'RFQ Services', 
            href: '/rfq',
            description: 'Request for Quotation management'
          },
          { 
            id: 'supplier-management',
            label: 'Supplier Management', 
            href: '/supplier-management',
            description: 'Tools for managing your supplier network'
          }
        ]
      }
    ]
  },
  {
    id: 'suppliers',
    label: 'Suppliers',
    icon: <FaUser size={16} />,
    children: [
      { 
        id: 'supplier-directory',
        label: 'Supplier Directory', 
        href: '/suppliers',
        description: 'Browse our comprehensive supplier database'
      },
      { 
        id: 'wholesale-suppliers',
        label: 'Wholesale Suppliers', 
        href: '/wholesale',
        description: 'Find bulk quantity providers'
      },
      { 
        id: 'manufacturers',
        label: 'Manufacturers', 
        href: '/manufacturers',
        description: 'Connect directly with product makers'
      },
      { 
        id: 'featured-suppliers',
        label: 'Featured Suppliers', 
        href: '/featured-suppliers',
        description: 'Highlighted premium suppliers'
      }
    ]
  },
  {
    id: 'become-vendor',
    label: 'Become a Supplier',
    icon: <FaStore size={16} />,
    isVendorAction: true,
    href: '/supplier-registration',
    description: 'Join our platform and grow your business globally'
  }
];


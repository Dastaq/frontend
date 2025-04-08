'use client';

import Link from 'next/link';
import {
  FaFacebook, FaInstagram, FaYoutube,
  FaCcVisa, FaCcMastercard, FaPaypal, FaApple, FaGoogle,
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { JSX, useState } from 'react';
import toast from 'react-hot-toast';
import { FooterProps } from '@/type/footer';
import Input from './UI/input';
import { Button } from './UI/button';
import { BrandName } from '@/brandname';
import { HelpPages } from '@/constant/footer.constant';



const Footer = ({
  footerLinks = {},
  socialMedia = [],
  paymentMethods = [],
  newsletterText = {
    title: '',
    description: '',
    privacyText: '',
    buttonText: ''
  },
  copyrightText = ''
}: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const renderIcon = (iconName: string) => {
    const icons: Record<string, JSX.Element> = {
      FaFacebook: <FaFacebook className="hover:text-[#1877F2]" />,
      FaInstagram: <FaInstagram className="hover:text-[#E4405F]" />,
      FaXTwitter: <FaXTwitter className="hover:text-[#000000]" />,
      FaYoutube: <FaYoutube className="hover:text-[#CD201F]" />,
      FaCcVisa: <FaCcVisa className="hover:text-[#1A1F71]" />,
      FaCcMastercard: <FaCcMastercard className="hover:text-[#EB001B]" />,
      FaPaypal: <FaPaypal className="hover:text-[#003087]" />,
      FaApple: <FaApple className="hover:text-[#A3AAAE]" />,
      FaGoogle: <FaGoogle className="hover:text-[#4285F4]" />,
    };
    return icons[iconName] || null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!email) throw new Error('Email is required');
      if (!/\S+@\S+\.\S+/.test(email)) throw new Error('Invalid email format');

      console.log("Subscribed with email:", email);

      toast.success('You have successfully subscribed to our newsletter!', {
        duration: 5000,
        position: 'bottom-center',
        style: {
          background: '#10B981',
          color: '#fff',
        },
      });

      setEmail('');
    } catch (error) {
      toast.error('Subscription failed. Please try again.', {
        position: 'bottom-center',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-xl font-semibold mb-6 font-poppins tracking-wide">
              {newsletterText.title || 'Stay Updated'}
            </h3>
            <p className="mb-6 text-gray-400 font-montserrat leading-relaxed">
              {newsletterText.description || 'Subscribe to our newsletter for the latest updates and offers.'}
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-5 py-3 rounded-lg bg-gray-800 text-gray-200 
               focus:outline-none focus:ring-2 focus:ring-primary-500 
               focus:border-transparent transition-all"
                required
                value={email}
                // onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                inputMode="email"
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-primary-600 to-primary-700 
               hover:from-primary-700 hover:to-primary-800 text-white 
               font-medium py-3 px-8 rounded-lg transition-all 
               whitespace-nowrap shadow-lg hover:shadow-primary-500/20"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : newsletterText.buttonText || 'Subscribe'}
              </Button>
            </form>

            <p className="text-xs mt-3 text-gray-500 font-montserrat">
              {newsletterText.privacyText || 'We respect your privacy. Unsubscribe at any time.'}
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="space-y-4">
              <h3 className="text-white text-lg font-semibold mb-4 uppercase tracking-wider font-poppins">
                {section?.title}
              </h3>
              <ul className="space-y-3">
                {section?.links?.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors duration-300 font-montserrat flex items-center group"
                      aria-label={link.name}
                    >
                      <span className="w-1 h-1 bg-gray-600 rounded-full mr-3 group-hover:bg-white transition-all"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social & Payment Section */}
        <div className="border-t border-gray-800 pt-12 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Social Media */}
            <div className="flex items-center gap-6">
              <span className="text-gray-300 font-medium font-poppins">Connect With Us:</span>
              <div className="flex gap-5">
                {socialMedia.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-2xl text-gray-400 hover:scale-110 transition-all duration-300"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {renderIcon(social.icon)}
                  </Link>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-6">
              <span className="text-gray-300 font-medium font-poppins">Secure Payments:</span>
              <div className="flex gap-5 text-2xl">
                {paymentMethods.map((method) => (
                  <div
                    key={method.name}
                    aria-label={method.name}
                    className="text-gray-400 hover:scale-110 transition-all duration-300"
                  >
                    {renderIcon(method.icon)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-900 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <span className="font-montserrat text-gray-500 mb-3 md:mb-0">
              &copy; {currentYear} <BrandName/> {copyrightText}
            </span>
            <div className="flex gap-6">
              {HelpPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="text-gray-400 hover:text-white transition-colors font-montserrat"
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
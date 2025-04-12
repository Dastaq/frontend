





"use client";
import {BRAND_NAME, FOOTER_LINKS, SOCIAL_MEDIA, PAYMENT_METHODS, NEWSLETTER, } from "@/constant/footer.constant";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import { FaCcVisa, FaCcMastercard, FaPaypal } from "react-icons/fa";
import { FaApple, FaGoogle } from "react-icons/fa";

// import {
//   BRAND_NAME,
//   FOOTER_LINKS,
//   SOCIAL_MEDIA,
//   PAYMENT_METHODS,
//   NEWSLETTER,
// } from "@/constants/footer.constants";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      if (!email) throw new Error("Email is required");
      if (!/\S+@\S+\.\S+/.test(email)) throw new Error("Please enter a valid email");

      toast.success("You've subscribed successfully!", {
        position: "bottom-center",
      });
      setEmail("");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Subscription failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "facebook":
        return <FaFacebook className="text-lg" />;
      case "instagram":
        return <FaInstagram className="text-lg" />;
      case "twitter":
        return <FaTwitter className="text-lg" />;
      case "pinterest":
        return <FaPinterest className="text-lg" />;
      case "visa":
        return <FaCcVisa className="text-xl" />;
      case "mastercard":
        return <FaCcMastercard className="text-xl" />;
      case "paypal":
        return <FaPaypal className="text-xl" />;
      case "applepay":
        return <FaApple className="text-xl" />;
      case "googlepay":
        return <FaGoogle className="text-xl" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-primary-600 mb-4">
              {NEWSLETTER.title}
            </h3>
            <p className="text-gray-600 mb-4">{NEWSLETTER.description}</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-md transition-colors disabled:opacity-70"
              >
                {isSubmitting ? "Subscribing..." : NEWSLETTER.buttonText}
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              {NEWSLETTER.privacyText}
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(FOOTER_LINKS).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Media */}
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Follow us:</span>
            <div className="flex gap-4">
              {SOCIAL_MEDIA.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  aria-label={social.name}
                  className="text-gray-500 hover:text-primary-600 transition-colors"
                >
                  {renderIcon(social.icon)}
                </Link>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center gap-4">
            <span className="text-gray-600">We accept:</span>
            <div className="flex gap-3">
              {PAYMENT_METHODS.map((method) => (
                <div
                  key={method.name}
                  aria-label={method.name}
                  className="text-gray-500 hover:text-primary-600 transition-colors"
                >
                  {renderIcon(method.icon)}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
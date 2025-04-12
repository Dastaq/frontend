'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Input from './UI/input';
import { Button } from './UI/button';
import { BrandName } from './brandname';

interface AuthFormProps {
  type: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void> | void;
  loading: boolean;
  error: string | null;
  brand?: any; // Adjust the type as per your brand object structure
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  }
};
const ForBrandName = () => <span> <BrandName/>  </span>;  
export const AuthForm = ({ 
  type, 
  onSubmit, 
  loading, 
  error,
  brand = { 
    name: < ForBrandName />, 
    logo: '/logo.jpeg', 
    logoHeight: 40, 
    logoWidth: 40 
  }  
}: AuthFormProps) => {
  return (
    <motion.div 
      className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="flex flex-col items-center space-y-4"
        variants={itemVariants}
      >
        {brand.logo && (
          <div className="mb-2">
            <Image
              src={brand.logo}
              alt={brand.name}
              height={brand.logoHeight || 40}
              width={brand.logoWidth || 40}
              className="object-contain"
            />
          </div>
        )}
        <h2 className="text-2xl font-bold text-center text-gray-900">
          {type === 'create account' 
            ? `Join ${brand.name}` 
            : `Welcome to ${brand.name}`}
        </h2>
        <p className="text-sm text-gray-500">
          {type === 'create account' 
            ? 'Create your account to get started' 
            : 'Sign in to continue'}
        </p>
      </motion.div>
      
      {error && (
        <motion.div 
          className="p-4 text-sm text-red-700 bg-red-100 rounded-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 500 }}
        >
          {error}
        </motion.div>
      )}

      <form className="mt-8 space-y-6" onSubmit={onSubmit}>
        <motion.div 
          className="space-y-4"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {type === 'create account' && (
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
              placeholder = 'Name'
                required
                error={!!error}
                className="border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>
          )}

          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder = 'name@email.com'
              required
              error={!!error}
              className="border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder = '*************'
              required
              error={!!error}
              className="border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>

          {type === 'create account' && (
            <motion.div variants={itemVariants}>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                error={!!error}
                className="border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>
          )}
        </motion.div>

        <motion.div variants={itemVariants}>
          <Button
            type="submit"
            loading={loading}
            disabled={loading}
            fullWidth
            variant="primary"
            size="md"
            rounded="md"
          >
            {type === 'create account' ? 'Sign Up' : 'Sign In'}
          </Button>
        </motion.div>
      </form>

      <motion.div 
        className="text-center text-sm text-gray-500"
        variants={itemVariants}
      >
        {type === 'create account' ? (
          <p>Already have an account? <Link href="/login" className="text-blue-600 hover:underline">Log In</Link></p>
        ) : (
          <p>Don't have an account? <Link href="/signup" className="text-blue-600 hover:underline">Sign up</Link></p>
        )}
      </motion.div>
    </motion.div>
  );
};

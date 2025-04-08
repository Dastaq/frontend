import { FaEnvelope, FaLock, FaUser, FaGoogle, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Input from './UI/input';
import { Button } from './UI/button';

interface AuthFormProps {
  type: 'login' | 'create account';
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
  error?: string;
}

const AuthForm = ({ type, onSubmit, loading, error }: AuthFormProps) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-800 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        <motion.div 
          className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="max-w-md mx-auto">
            <motion.div variants={itemVariants}>
              <h1 className="text-2xl font-semibold">
                {type === 'login' ? 'Login' : 'Create Account'}
              </h1>
            </motion.div>

            {error && (
              <motion.div 
                className="mt-4 p-3 bg-red-100 text-red-700 rounded-md"
                variants={itemVariants}
              >
                {error}
              </motion.div>
            )}

            <div className="divide-y divide-gray-200">
              <motion.div 
                className="py-8 text-base leading-6 space-y-6 text-gray-700 sm:text-lg sm:leading-7"
                variants={itemVariants}
              >
                <form onSubmit={onSubmit}>
                  {type === 'create account' && (
                    <motion.div variants={itemVariants}>
                      <Input
                        name="name"
                        type="text"
                        placeholder="Full Name*"
                        variant="ghost"
                        size="md"
                        fullWidth
                        required
                        className="h-10 border-b-2 border-gray-300 focus:border-cyan-500 px-0"
                      />
                    </motion.div>
                  )}

                  <motion.div variants={itemVariants}>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address*"
                      variant="ghost"
                      size="md"
                      fullWidth
                      required
                      className="h-10 border-b-2 border-gray-300 focus:border-cyan-500 px-0"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Input
                      name="password"
                      type="password"
                      placeholder="Password*"
                      variant="ghost"
                      size="md"
                      fullWidth
                      required
                      minLength={6}
                      className="h-10 border-b-2 border-gray-300 focus:border-cyan-500 px-0"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Button
                      type="submit"
                      variant="primary"
                      className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-md px-4 py-2 w-full mt-6"
                      loading={loading}
                    >
                      {type === 'login' ? 'Login' : 'Sign Up'}
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </div>

          <motion.div 
            className="w-full flex justify-center mt-8"
            variants={itemVariants}
          >
            <Button
              variant="outline"
              className="bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200"
              icon={<FaGoogle className="text-red-500 mr-2" />}
            >
              Continue with Google
            </Button>
          </motion.div>

          <motion.div 
            className="text-center text-sm mt-6"
            variants={itemVariants}
          >
            {type === 'login' ? (
              <p>
                Don't have an account?{' '}
                <Link href="/signup" className="text-cyan-600 hover:underline">
                  Sign up
                </Link>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <Link href="/login" className="text-cyan-600 hover:underline">
                  Login
                </Link>
              </p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthForm;
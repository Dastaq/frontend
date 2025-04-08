'use client';
import AuthForm from '@/app/component/auth.component';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; 

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null); 

    try {

      // Simulated user ID with demo data
      const userId = Math.floor(Math.random() * 1000); 
      console.log('Logging in...');

      // Redirect to /profile/{userId} on successful "login"
      router.push(`/profile/${userId}`);

      /*
      // Backend API Call Example (Uncomment for real implementation)
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: e.target.email.value, 
          password: e.target.password.value,
        }),
        });
      
        if (!response.ok) throw new Error('Login failed');
      const data = await response.json();
      const userId = data.userId; 
      router.push(`/profile/${userId}`);
      */

      /*
      // Google OAuth Example 
      // 
      import { useGoogleLogin } from '@react-oauth/google';
      const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
          const res = await fetch('/api/auth/google', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: tokenResponse.access_token }),
          });
          if (!res.ok) throw new Error('Google login failed');
          const data = await res.json();
          const userId = data.userId; // Assuming API returns userId
          router.push(`/profile/${userId}`);
        },
        onError: () => {
          throw new Error('Google authentication failed');
        },
      });
      googleLogin(); // Trigger Google login
      */
    } catch (err) {
      setError('Failed to log in.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <AuthForm type="login" onSubmit={handleSubmit} loading={loading} />
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  );
};

export default LoginPage;


'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import AuthForm from '@/component/auth.component';

const SignupPage = () => {
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
      console.log('Signing up...');

      // Redirect to /profile/{userId} on successful "signup"
      router.push(`/profile/${userId}`);

      /*
      // Backend API Call Example (Uncomment for real implementation)
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: e.target.email.value, // Assuming form has email field
          password: e.target.password.value, // Assuming form has password field
          // Add more fields like name, etc., as needed
        }),
      });

      if (!response.ok) throw new Error('Signup failed');
      const data = await response.json();
      const userId = data.userId; // Assuming API returns userId
      router.push(`/profile/${userId}`);
      */

      /*
      // Google OAuth Example 
      // Requires @react-oauth/google package or similar
      import { useGoogleLogin } from '@react-oauth/google';
      const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
          const res = await fetch('/api/auth/google-signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: tokenResponse.access_token }),
          });
          if (!res.ok) throw new Error('Google signup failed');
          const data = await res.json();
          const userId = data.userId; // Assuming API returns userId
          router.push(`/profile/${userId}`);
        },
        onError: () => {
          throw new Error('Google authentication failed');
        },
      });
      googleLogin(); // Trigger Google signup
      */
    } catch (err) {
      setError('Failed to create account .');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <AuthForm type="create account" onSubmit={handleSubmit} loading={loading} />
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  );
};

export default SignupPage;
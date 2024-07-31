'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Login() {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      router.push('/');
      router.refresh(); // This refreshes the page to update the auth state
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <>
      <div className='auth__logo'>
        <Image src='/logos/email_logo.png' fill alt='Mindil Chambers' />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
      </form>
    </>
  );
}

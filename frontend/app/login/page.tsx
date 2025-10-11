'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire up authentication
    console.log('Login attempt:', { username, password });
  };

  const handleForgotPassword = () => {
    // TODO: Wire up forgot password flow
    console.log('Forgot password clicked');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-[#f0f7f0] to-[#e8f5e8] dark:from-[#0f1410] dark:to-[#0f1511]">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <Image
              src="/assets/Groveline-G.png"
              alt="Groveline"
              width={50}
              height={50}
              className="h-15 w-auto mx-auto mb-4"
            />
          </Link>
          <h1 className="text-3xl font-bold text-[var(--grove)]">Welcome Back</h1>
          <p className="text-[var(--muted)] mt-2">Sign in to your Groveline account</p>
        </div>

        {/* Login Form */}
        <div className="forest-card p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-semibold mb-2 text-[var(--grove)]"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
                className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white dark:bg-[var(--panel)] text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--forest)] transition-colors"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold mb-2 text-[var(--grove)]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white dark:bg-[var(--panel)] text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--forest)] transition-colors"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg forest-button-gradient text-white font-bold border border-[#1f4d20] hover:opacity-90 transition-opacity"
            >
              Login
            </button>

            {/* Forgot Password Button */}
            <button
              type="button"
              onClick={handleForgotPassword}
              className="w-full px-6 py-3 rounded-lg bg-white dark:bg-[var(--panel)] text-[var(--grove)] border border-[var(--border)] font-semibold hover:bg-[#f0f7f0] dark:hover:bg-[#243a28] transition-colors"
            >
              Forgot Password?
            </button>
          </form>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-sm text-[var(--muted)] hover:text-[var(--forest)] transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

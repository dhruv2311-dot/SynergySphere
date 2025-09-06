import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const validateEmail = (value) => {
    // strict-but-not-overbearing email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      setStatus('sending');

      // === Replace this block with your real API call ===
      // Example (Next.js API): await fetch('/api/auth/forgot-password', { method: 'POST', body: JSON.stringify({ email }) })
      await new Promise((res) => setTimeout(res, 900)); // simulate network
      // ==================================================

      setStatus('sent');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Left side - Illustration & Brand (hidden on small screens) */}
        <div className="hidden md:flex flex-col items-center justify-center px-10 py-12 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 text-white relative">
          <div className="absolute -left-16 -top-16 w-48 h-48 rounded-full opacity-10 blur-3xl bg-white"></div>
          <div className="absolute -right-12 -bottom-12 w-72 h-72 rounded-full opacity-10 blur-3xl bg-white" />

          <div className="z-10 text-center">
            <div className="inline-flex items-center justify-center rounded-full w-20 h-20 bg-white/10 mb-6">
              <span className="text-white font-semibold text-xl">S</span>
            </div>
            <h2 className="text-2xl font-semibold">SynergySphere</h2>
            <p className="mt-4 max-w-xs leading-relaxed text-white/90">No worries — we'll send a secure link to reset your password. The link will expire for your account's safety.</p>

            {/* Simple decorative illustration (SVG) */}
            <div className="mt-8 mx-auto">
              <svg width="220" height="160" viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect x="10" y="20" width="200" height="120" rx="12" fill="white" opacity="0.06" />
                <circle cx="60" cy="70" r="18" fill="white" opacity="0.12" />
                <circle cx="150" cy="96" r="28" fill="white" opacity="0.08" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="px-6 py-10 sm:px-10 sm:py-12">
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-semibold text-gray-900">Forgot Password</h1>
              <a href="/login" className="text-sm text-blue-600 font-medium hover:underline">Back to login</a>
            </div>

            <p className="text-sm text-gray-500 mb-6">Enter the email associated with your account and we'll send a password reset link.</p>

            {status === 'sent' ? (
              <div className="rounded-md bg-green-50 p-4 mb-6" role="status" aria-live="polite">
                <div className="flex">
                  <div className="flex-shrink-0">
                    {/* check icon */}
                    <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden>
                      <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3 text-sm text-green-700">
                    <p className="font-medium">Email sent</p>
                    <p>If you don't see it, check your spam folder or try again in a few minutes.</p>
                  </div>
                </div>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`block w-full pr-10 sm:text-sm rounded-lg border ${error ? 'border-red-300 focus:ring-red-500' : 'border-gray-200 focus:ring-blue-300'} px-4 py-3 focus:outline-none`}
                    placeholder="you@company.com"
                    aria-invalid={!!error}
                    aria-describedby={error ? 'email-error' : undefined}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    {/* mail icon */}
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden>
                      <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 8.5v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 8.5L12 14 3 8.5" />
                    </svg>
                  </div>
                </div>
                {error ? <p id="email-error" className="mt-2 text-sm text-red-600">{error}</p> : null}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 disabled:opacity-60"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                  ) : null}

                  <span>{status === 'sending' ? 'Sending...' : 'Send reset link'}</span>
                </button>
              </div>

              <div className="text-sm text-center text-gray-500">
                Remembered your password? <a href="/login" className="text-blue-600 font-medium hover:underline">Sign in</a>
              </div>
            </form>

            <div className="mt-8 border-t pt-6">
              <p className="text-xs text-gray-400">Security tip: We'll never send passwords via email. The link below lets you set a new password securely.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

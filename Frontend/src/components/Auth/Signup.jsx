import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    setError(null);

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedConfirmPassword = confirmPassword.trim();

    if (!trimmedEmail || !trimmedPassword || !trimmedConfirmPassword) {
      setError("All fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError("Please enter a valid email address");
      return;
    }

    if (trimmedPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (trimmedPassword !== trimmedConfirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Mock signup logic (replace with your desired action, e.g., API call)
    console.log("Signup successful with:", { email: trimmedEmail, password: trimmedPassword });

    // Navigate to dashboard after successful "signup"
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center font-poppins text-gray-700">
      <div className="w-full max-w-6xl mx-4 md:mx-8 lg:mx-0">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          <div className="hidden md:flex flex-col items-center justify-center px-10 py-12 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 relative">
            <div className="absolute left-10 top-20 w-16 h-16 rounded-full opacity-30 blur-sm bg-white/20"></div>
            <div className="absolute right-16 bottom-24 w-24 h-24 rounded-full opacity-20 blur-md bg-white/20"></div>
            <div className="absolute left-24 bottom-40 w-8 h-8 rounded-full bg-white/10"></div>
            <div className="z-10 flex flex-col items-center">
              <div className="inline-flex items-center justify-center rounded-full w-20 h-20 bg-white/10 mb-6">
                <span className="text-white font-semibold text-xl">S</span>
              </div>
              <h2 className="text-white text-2xl font-semibold">SynergySphere</h2>
              <p className="text-white/90 mt-3 text-center max-w-xs">
                Join SynergySphere to collaborate, create, and grow together.
              </p>
            </div>
            <div className="mt-8 z-10">
              <svg
                width="220"
                height="220"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-80"
              >
                <circle cx="100" cy="100" r="90" fill="white" opacity="0.06" />
                <circle cx="60" cy="80" r="20" fill="white" opacity="0.12" />
                <circle cx="140" cy="130" r="30" fill="white" opacity="0.08" />
              </svg>
            </div>
          </div>

          <div className="px-6 py-8 md:py-12 md:px-10 lg:px-14">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center text-white font-medium">
                  S
                </div>
                <h1 className="text-2xl font-semibold text-gray-900">Create your account</h1>
              </div>
              <div className="hidden sm:flex items-center gap-3">
                <span className="text-sm text-gray-500">Already have an account?</span>
                <Link to="/login" className="text-sm text-blue-600 font-medium">
                  Log In
                </Link>
              </div>
            </div>

            <form onSubmit={handleSignup} className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Sign Up
              </button>
            </form>

            <div className="text-center mt-4 text-sm text-gray-600">
              By signing up you agree to our{" "}
              <a href="/terms" className="text-blue-600">
                Terms
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-blue-600">
                Privacy Policy
              </a>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
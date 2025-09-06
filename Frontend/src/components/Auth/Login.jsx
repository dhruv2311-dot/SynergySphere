import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
 return (
   <div className="min-h-screen bg-white flex items-center justify-center font-poppins text-gray-600">
     <div className="w-full max-w-6xl mx-4 md:mx-8 lg:mx-0">
       <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

         {/* LEFT - Gradient / Illustration */}
         <div className="hidden md:flex flex-col items-center justify-center px-10 py-12 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 relative">
           {/* Decorative circles (converted from your rectangles) */}
           <div className="absolute left-10 top-20 w-16 h-16 rounded-full opacity-30 blur-sm bg-white/20"></div>
           <div className="absolute right-16 bottom-24 w-24 h-24 rounded-full opacity-20 blur-md bg-white/20"></div>
           <div className="absolute left-24 bottom-40 w-8 h-8 rounded-full bg-white/10"></div>

           {/* Brand + Artwork */}
           <div className="z-10 flex flex-col items-center">
             <div className="inline-flex items-center justify-center rounded-full w-20 h-20 bg-white/10 mb-6">
               <span className="text-white font-semibold text-xl">S</span>
             </div>
             <h2 className="text-white text-2xl font-semibold">SynergySphere</h2>
             <p className="text-white/90 mt-3 text-center max-w-xs">Create, collaborate and scale — access your account to continue building.</p>
           </div>

           {/* Large illustration placeholder */}
           <div className="mt-8 z-10">
             {/* Replace with an SVG or image */}
             <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
               <circle cx="100" cy="100" r="90" fill="white" opacity="0.06" />
               <circle cx="60" cy="80" r="20" fill="white" opacity="0.12" />
               <circle cx="140" cy="130" r="30" fill="white" opacity="0.08" />
             </svg>
           </div>
         </div>

         {/* RIGHT - Form */}
         <div className="px-6 py-8 md:py-12 md:px-10 lg:px-14">
           <div className="flex items-center gap-3 mb-6">
             <div className="w-10 h-10 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center text-white font-medium">S</div>
             <h1 className="text-2xl font-semibold text-gray-900">Welcome Back!</h1>
           </div>

           <p className="text-sm text-gray-500 mb-6">Sign in to your account to continue</p>

           <div className="space-y-4">
             <label className="block text-sm font-medium text-gray-700">Email Address</label>
             <input
               type="email"
               placeholder="Enter your email"
               className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
             />

             <label className="block text-sm font-medium text-gray-700 mt-2">Password</label>
             <input
               type="password"
               placeholder="Enter your password"
               className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
             />

             <div className="flex items-center justify-between mt-1">
               <label className="inline-flex items-center gap-2 text-sm text-gray-600">
                 <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                 <span>Remember me</span>
               </label>

               <Link to="/forgot-password" className="text-sm font-medium text-blue-600">Forgot password?</Link>
             </div>

             <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300">Log In</button>

             <div className="flex items-center gap-3 mt-5">
               <div className="h-px bg-gray-200 flex-1" />
               <div className="text-sm text-gray-500">Or continue with</div>
               <div className="h-px bg-gray-200 flex-1" />
             </div>

             <div className="grid grid-cols-3 gap-3 mt-4">
               <button aria-label="Sign in with Google" className="flex items-center justify-center rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium">
                 {/* Google icon placeholder */}
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M21 12.27c0-.63-.06-1.23-.18-1.81H12v3.43h4.94c-.21 1.12-.86 2.07-1.83 2.7v2.24h2.96C19.72 18.3 21 15.5 21 12.27z" fill="#4285F4"/>
                 </svg>
               </button>

               <button aria-label="Sign in with Github" className="flex items-center justify-center rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium">
                 {/* Github icon placeholder */}
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                   <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.39.97.11-.75.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.77.12 3.06.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.68.42.36.8 1.07.8 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                 </svg>
               </button>

               <button aria-label="Sign in with Twitter" className="flex items-center justify-center rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium">
                 {/* Twitter icon placeholder */}
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                   <path d="M22 5.92c-.63.28-1.3.47-2 .56a3.5 3.5 0 0 0-6 3.2A9.94 9.94 0 0 1 3.2 4.8a3.48 3.48 0 0 0 1.08 4.64c-.5 0-.97-.15-1.4-.38v.04c0 1.7 1.2 3.12 2.8 3.45-.46.12-.95.17-1.45.06.4 1.24 1.53 2.15 2.87 2.18A7 7 0 0 1 2 18.58a9.92 9.92 0 0 0 5.36 1.57c6.43 0 9.95-5.33 9.95-9.95v-.45c.67-.47 1.24-1.06 1.7-1.72-.6.28-1.25.48-1.92.57z" />
                 </svg>
               </button>
             </div>

             <div className="text-center mt-4 text-sm text-gray-600">
               Don't have an account? <Link to="/signup" className="text-blue-600 font-medium">Sign Up</Link>
             </div>
           </div>
         </div>

       </div>
     </div>
   </div>
 );
};

export default Login;

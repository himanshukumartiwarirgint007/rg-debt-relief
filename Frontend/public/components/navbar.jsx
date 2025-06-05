// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-[#002855] w-full">
      <div className="max-w-7xl mx-auto flex items-center px-2 py-4">
        {/* Left: Logo and Brand */}
        <div className="flex items-center gap-4 flex-shrink-0 min-w-0">
          <div className="w-32 h-20 bg-[url('/Media/logo.png')] bg-center bg-contain bg-no-repeat"></div>
          <div className="min-w-0">
            <div className="text-white font-bold text-2xl lg:text-3xl leading-tight truncate">
              REDDINGTON<br className="hidden lg:block" /> GLOBAL Pvt. Ltd.
            </div>
            <div className="text-white text-xs tracking-widest mt-1 hidden lg:block">DEBT RELIEF</div>
          </div>
        </div>

        {/* Center: Navbar */}
        <nav className="hidden lg:flex flex-wrap gap-6 min-w-0 mx-2 whitespace-nowrap flex-shrink-0">
          <a href="/" className="text-white font-semibold text-base px-3 py-2 hover:bg-[#16b477] rounded transition">Home</a>
          <a href="/apply" className="text-white font-semibold text-base px-3 py-2 hover:bg-[#16b477] rounded transition">Apply</a>
          <a href="/howitworks" className="text-white font-semibold text-base px-3 py-2 hover:bg-[#16b477] rounded transition">How It Works</a>
          <a href="/about" className="text-white font-semibold text-base px-3 py-2 hover:bg-[#16b477] rounded transition">About Us</a>
          <a href="/resources" className="text-white font-semibold text-base px-3 py-2 hover:bg-[#16b477] rounded transition">Resources</a>
          <a href="/stories" className="text-white font-semibold text-base px-3 py-2 hover:bg-[#16b477] rounded transition">Client Stories</a>
          <a href="/blog" className="text-white font-semibold text-base px-3 py-2 hover:bg-[#16b477] rounded transition">Blog</a>
        </nav>

        {/* Right: Buttons */}
        <div className="hidden lg:flex items-center gap-2 flex-shrink-0 ml-auto">
          <a href="/login" className="bg-[#2563eb] text-white font-bold px-5 py-2 rounded hover:bg-[#174ea6] transition text-base">Login</a>
          <a href="tel:8003009550" className="border-2 border-white bg-white text-[#002855] font-bold px-6 py-2 rounded-full hover:bg-[#16b477] hover:text-white hover:border-[#16b477] transition text-base">800-300-9550</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

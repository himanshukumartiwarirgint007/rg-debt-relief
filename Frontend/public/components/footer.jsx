// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#002855] text-white py-8 mb-0.5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm mb-4 sm:mb-0">
            &copy;2025 Reddington Global Debt Relief. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-[#16b477] transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-[#16b477] transition">Terms of Service</a>
            <a href="/contact" className="hover:text-[#16b477] transition">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

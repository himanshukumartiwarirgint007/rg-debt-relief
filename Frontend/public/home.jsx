import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';

const Home = () => {
  return (
    <>
      <Navbar />
      
      {/* Page Content */}
      <main className="min-h-screen p-4">
        <h1 className="text-3xl font-bold text-center text-[#002855]">Welcome to Reddington Global</h1>
        {/* ...your content */}
      </main>
      
      <Footer />
    </>
  );
};

export default Home;

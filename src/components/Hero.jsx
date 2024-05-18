import React from 'react';
import Campus from "./campus.png"
const HeroSection = () => {
  return (
    <section className="bg-gray-100">
      <div style={{ backgroundImage: `url(${Campus})` }}>
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Uniphase</h1>
        <p className="text-gray-600 mt-4">Connect | Empower | Learn</p>
        <button className="mt-8 px-6 py-3 bg-yellow-600 text-white font-semibold rounded hover:bg-indigo-500">Join us </button>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from 'react';

const Features = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Why join uniphase ?</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 px-4 py-2">
            <div className="bg-green-200 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Communities</h3>
              <p className="text-white">Connecting universities students and learners across the Country</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 py-2">
            <div className="bg-green-200 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Discussions</h3>
              <p className="text-white">Algorithimic  based discussion groups for students</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 py-2">
            <div className="bg-green-200 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Empowerment</h3>
              <p className="text-white">We have environment where individuals feel comfortable to express themselves</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

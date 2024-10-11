import React from 'react';
import logo from '../../public/Track-Hack-removebg-preview.png';

function Hero() {
  return (
    <div className="hero bg-white min-h-96"> {/* White background */}
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={logo}
          className="max-w-sm" /> {/* Removed styles to keep the logo clean */}
        <div className="text-center lg:text-left">
          <h1 className="text-6xl font-extrabold text-purple-600">Welcome to Track-Hack!</h1> {/* Changed name */}
          <p className="py-6 text-gray-700 text-lg font-semibold">
            Track all upcoming hackathons with ease. Stay updated, compete, and collaborate in the most exciting tech challenges.
          </p>
          <p className="text-gray-500 text-md font-medium">
            Join our community of innovators and take your skills to the next level.
          </p> {/* Added additional text */}
          <button className="btn bg-purple-600 text-yellow-400 border-none hover:bg-yellow-400 hover:text-purple-600 text-lg font-semibold mt-4">
            Get Started
          </button> {/* Purple button with yellow hover */}
        </div>
      </div>
    </div>
  );
}

export default Hero;

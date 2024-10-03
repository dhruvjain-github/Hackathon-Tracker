import React from 'react'

function Hero() {
  return (
    <div className="hero bg-[#1B1B1B] min-h-80"> {/* Changed to dark background */}
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl grayscale" />
        <div>
          <h1 className="text-5xl font-bold text-[#FFFFFF]">Welcome!</h1> {/* Changed text color */}
          <p className="py-6 text-[#C4C4C4]"> {/* Changed text color */}
            Track all upcoming hackathons with ease. Stay updated, compete, and collaborate in the most exciting tech challenges.
          </p>
          <button className="btn btn-outline text-[#FFFFFF] border-[#FFFFFF] hover:bg-[#ffffff] hover:text-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero

import React from 'react'

const Hero = () => {
  return (
    <section className="h-screen bg-orange-100 flex items-center justify-center text-white">
      <div className="w-full max-w-7xl px-6 md:flex md:items-center">
        <div className="md:w-1/2">
          <img
            src="src\assets\images\ahmed.png" // Change to the correct path
            alt="Ahmed Alkhateeb"
            className="w-full h-auto rounded-full shadow-lg"
          />
        </div>
        <div className="md:w-1/2 mt-6 md:mb-56 md:ml-32 text-center md:text-left">
          <h1 className="text-7xl font-bold text-blue-500">Hello / سَلَامٌ</h1>
          <p className="mt-4 text-lg text-gray-700 ">
            Welcome to my personal website. Explore, learn, and enjoy the journey!
          </p>
        </div>
      </div>

    </section>
  )
}

export default Hero

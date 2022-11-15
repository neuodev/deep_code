import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative border-b-2 border-dashed mx-4">
      <h1 className="text-9xl mb-8">Deep Code</h1>
      <p className="text-2xl text-gray-300 mb-8">
        Enrich Arabic content for programmers
      </p>

      <div className="bg-gray-800 border border-gray-200 rounded-lg p-6 italic shadow-2xl max-w-xl">
        <p>
          Deep Code aims to fill the missing gap in the Arabic content related
          to programming. In the hope of making more people learn how to code
          and make coding accessible for people at a young age.
        </p>
      </div>
    </div>
  );
};

export default Hero;

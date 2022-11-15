import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-9xl mb-8">Deep Code</h1>
      <p className="text-2xl text-gray-300">
        Enrich Arabic content for programmers
      </p>
    </div>
  );
};

export default Hero;

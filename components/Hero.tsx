import React from "react";
import TextSection from "./common/TextSection";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative border-b-2 border-dashed mx-4">
      <TextSection
        title="Deep Code"
        subtitle="Enrich Arabic content for programmers"
        content="
            Deep Code aims to fill the missing gap in the Arabic 
            content related to programming. In the hope of making 
            more people learn how to code and make coding accessible 
            for people at a young age."
      />
    </div>
  );
};

export default Hero;

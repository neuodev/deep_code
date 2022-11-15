import React from "react";
import TextSection from "./common/TextSection";

const Problem = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen border-b-2 border-dashed">
      <TextSection
        title="The Problem"
        subtitle="The problem we are trying to solve"
        content="
          There are a lot of high on-demand skills that there is no or little
          professional Arabic content about. This makes it harder for people to
          get into programming, especially younger people whose English is not
          yet fully developed. Deep Code aims to make it more accessible.
        "
      />
    </div>
  );
};

export default Problem;

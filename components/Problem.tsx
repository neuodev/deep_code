import React from "react";

const Problem = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-8xl mb-8">The problem</h1>
      <p className="text-2xl text-gray-300 mb-8">
        The problem we are trying to solve
      </p>

      <div className="bg-gray-800 border border-gray-200 rounded-lg p-6 italic shadow-2xl max-w-xl">
        <p>
          There are a lot of high on-demand skills that there is no or little
          professional Arabic content about. This makes it harder for people to
          get into programming, especially younger people whose English is not
          yet fully developed. Deep Code aims to make it more accessible.
        </p>
      </div>
    </div>
  );
};

export default Problem;

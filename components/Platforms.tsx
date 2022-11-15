import React from "react";
import FullScreen from "./common/FullScreen";
import Image from "next/image";

const Platforms = () => {
  return (
    <FullScreen>
      <h1 className="text-8xl mb-8">Where to find Deep Code</h1>
      <div className="grid grid-cols-12 gap-5 max-w-screen-lg">
        <div className="bg-light-gray shadow-2xl shadow-light-gray rounded-lg p-6 col-span-12 md:col-span-6">
          <Image
            src="/assets/youtube.svg"
            width={480}
            height={480}
            alt="YouTube"
          />
          <h1 className="text-2xl mt-4">YouTube</h1>
          <p>Deep Code is currently available on YouTube.</p>
          <a
            href="https://www.youtube.com/@deep_code"
            target="_blank"
            className="text-gray-200 underline"
            rel="noreferrer"
          >
            youtube.com/@deep_code
          </a>
        </div>
        <div className="bg-light-gray shadow-2xl shadow-light-gray rounded-lg p-6 col-span-12 md:col-span-6">
          <Image
            src="/assets/deep_code.png"
            width={480}
            height={480}
            alt="Deep Code Platform"
          />
          <h1 className="text-2xl mt-4">Deep Code Platform</h1>
          <p>
            Deep Code will be available as an independent platform Even if
            YouTube is a good place to start but it is not the perfect one.
          </p>
        </div>
      </div>
    </FullScreen>
  );
};

export default Platforms;

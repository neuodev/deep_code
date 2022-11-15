import React from "react";

const FullScreen: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen border-b-2 border-dashed">
      {children}
    </div>
  );
};

export default FullScreen;

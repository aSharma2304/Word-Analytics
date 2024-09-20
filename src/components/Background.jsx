import React from "react";

const Background = ({ children }) => {
  return (
    <div className=" min-h-screen gap-2 min-w-full flex flex-col justify-between items-center   px-64 p-16 bg-gradient-to-r from-[#22313f]  to-[#000000] ">
      {children}
    </div>
  );
};

export default Background;

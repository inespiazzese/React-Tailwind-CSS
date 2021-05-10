import React from "react";
const Footer = ({ ...otherProps }) => {
  return (
    <footer className=" bg-black">
      <div className="w-full max-w-7xl mx-auto px-2.5 py-7">
        <span className=" relative text-pink-100 font-bold text-base text-center flex items-center justify-center  ">
          X-COMPANY
        </span>
        <span className=" relative  text-pink-900 text-sm text-center flex items-center justify-center  ">
          COPYRIGHT @ 2021
        </span>
      </div>
    </footer>
  );
};
export default Footer;

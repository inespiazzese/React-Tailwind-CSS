import React from "react";
import Header from "./../../components/Header";
import Hero from "./../../assets/XAYcFj.jpeg";
import Footer from "./../../components/Footer";
const LandingPageLayout = ({ heading, ...otherProps }) => {
  return (
    <div className="min-h-full bg-gray-300 font-body">
      <div className="h-screen flex flex-col">
        <Header />
        <div
          className="relative flex items-center justify-center h-full bg-cover bg-center bg-fixed bg-no-repeat "
          style={{ backgroundImage: `url(${Hero})` }}
        >
          {heading && (
            <h1 className="relative text-pink-100  uppercase text-center text-xl md:text-6xl z-10 px-2.5 ">
              {heading}
            </h1>
          )}
        </div>
        <div className=" absolute  z-0 top-0 left-0  w-full bg-black opacity-30" />
      </div>
      <div className="w-full max-w-7xl mx-auto">{otherProps.children}</div>
      <Footer />
    </div>
  );
};
LandingPageLayout.defaultProps = { heading: "" };
export default LandingPageLayout;

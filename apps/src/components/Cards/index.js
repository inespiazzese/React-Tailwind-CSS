import React from "react";
import Photo from "./../../assets/hollywood.jpeg";
import CoinbaseCommerceButton from "react-coinbase-commerce";
import "react-coinbase-commerce/dist/coinbase-commerce-button.css";
const Cards = ({ ...otherProps }) => {
  return (
    <div className="flex flex-row flex-wrap py-14 justify-center">
      <div className="w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5 ">
        <div className="bg-black">
          <div>
            <img src={Photo} className="w-full" />
          </div>
          <div className="p-2.5">
            <ul>
              <li className="list-none">
                <span className="font-bold text-base text-white">Title</span>
              </li>
              <li className="list-none">
                <span className="font-bold text-base text-white">
                  description
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5 ">
        <div className="bg-black">
          <div>
            <img src={Photo} className="w-full" />
          </div>
          <div className="p-2.5">
            <ul>
              <li className="list-none">
                <span className="font-bold text-base text-white">Title</span>
              </li>
              <li className="list-none">
                <span className="font-bold text-base text-white">
                  description
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5 ">
        <div className="bg-black">
          <div>
            <img src={Photo} className="w-full" />
          </div>
          <div className="p-2.5">
            <ul>
              <li className="list-none">
                <span className="font-bold text-base text-white">Title</span>
              </li>
              <li className="list-none">
                <span className="font-bold text-base text-white">
                  description
                </span>
              </li>
            </ul>
          </div>
        </div>
        <CoinbaseCommerceButton
          className="bg-black text-base text-white py-4 px-8 mt-4"
          checkoutId={"62bfd18c-0a38-40c5-b8c6-ca34c97eb364"}
        />
        <CoinbaseCommerceButton
          className="bg-black text-base text-white py-4 px-8 mt-4"
          checkoutId={"2a67040b-4ee5-434c-90a8-9b65c148e308"}
        />
      </div>
    </div>
  );
};
export default Cards;

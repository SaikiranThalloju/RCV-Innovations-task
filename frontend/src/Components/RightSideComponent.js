import React from "react";

const RightSideComponent = () => {
  return (
    <div className="mx-4">

           <div>
            <img src = "https://tpc.googlesyndication.com/simgad/15005503666730492993" alt= "right side"/>
           </div>

      <div className="flex text-gray-500 text-xs mt-3">
        <p className="mb-2  px-3 border-r text-xs  border-gray-500">
          Adevertise with us
        </p>
        <p className="mb-2  px-3 border-r text-xs border-gray-500">
          DB reporter
        </p>
        <p className="mb-2 px-3 border-r text-xs border-gray-500">Sitemap</p>
      </div>
      <div className="mx-4">
        <p className="mb-2 border-r text-xs border-gray-500  text-gray-500 p-0">
          Terms & Conditions and Grievance Redressal Policy
        </p>
      </div>

      <div className="flex flex-wrap  text-gray-500 mb-5">
        <p className="mb-2  px-3 border-r text-xs  border-gray-500">
          Contact Us
        </p>
        <p className="mb-2  px-3 border-r text-xs border-gray-500">RSS</p>
        <p className="mb-2 px-3 border-r text-xs border-gray-500">
          Cookie Policy
        </p>
        <p className="mb-2 px-3 border-r text-xs border-gray-500">
          Privacy Policy
        </p>
      </div>

      <div className="flex flex-col text-bold text-gray-500 my-2">
        <p className="text-semibold text-sm">Our Divisions</p>
        <div className="font-bold">
          <h1>DainikBhaskar.com</h1>
          <h1>DivyaBhaskar.com</h1>

          <h1>DivyaMarathi.com</h1>

          <h1>MoneyBhasker.com</h1>
          <h1>BhaskarAd.com</h1>
        </div>
      </div>
      <div className="text-gray-500 my-2 text-xs">
        <p>Copyright © 2023-24 DB Corp ltd., All Rights Reserved</p>
      </div>
      <div className="text-gray-500 my-2 text-xs">
        <p>This website follows the DNPA Code of Ethics.</p>
      </div>
    </div>
  );
};

export default RightSideComponent;

import * as React from "react";
import PreownedPromotionSlick1 from "../slick/PreownedPromotionSlick1";
import PreownedPromotionSlick2 from "../slick/PreownedPromotionSlick2";
import PreownedPromotionSlick3 from "../slick/PreownedPromotionSlick3";

function PreownedMasonry() {
  return (
    <>
      <div className="w-full px-2">
        <div className="w-full h-auto lg:flex">
          <div className="w-full lg:w-2/3 border bg-gray-300 border-blue-500 rounded-lg mt-1">
            <div className="w-full mb-10">
              <PreownedPromotionSlick1 />
            </div>
          </div>
          <div className="w-full lg:w-1/3 bg-gray-100 border border-blue-500 rounded-lg mt-1 lg:ml-1">
            <div className="w-full mb-10 h-auto">
              <PreownedPromotionSlick2 />
            </div>
          </div>
        </div>
        <div className="w-full h-auto border border-blue-500 rounded-lg mt-1 px-2">
          <PreownedPromotionSlick3 />
        </div>
      </div>
    </>
  );
}

export default PreownedMasonry;

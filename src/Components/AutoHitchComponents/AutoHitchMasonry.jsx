import * as React from "react";
import AutoHitchPromotionSlick1 from "../slick/AutoHitchPromotionSlick1";
import AutoHitchPromotionSlick2 from "../slick/AutoHitchPromotionSlick2";
import AutoHitchPromotionSlick3 from "../slick/AutoHitchPromotionSlick3";

function AutoHitchMasonry() {
  return (
    <>
      <div className="w-full px-2">
        <div className="w-full h-auto lg:flex">
          <div className="w-full lg:w-2/3 border bg-gray-300 border-blue-500 rounded-lg mt-1">
            <div className="w-full mb-10">
              <AutoHitchPromotionSlick1 />
            </div>
          </div>
          <div className="w-full lg:w-1/3 bg-gray-100 border border-blue-500 rounded-lg mt-1 lg:ml-1">
            <div className="w-full mb-10 h-auto">
              <AutoHitchPromotionSlick2 />
            </div>
          </div>
        </div>
        <div className="w-full h-auto border border-blue-500 rounded-lg mt-1 px-2">
          <AutoHitchPromotionSlick3 />
        </div>
      </div>
    </>
  );
}

export default AutoHitchMasonry;

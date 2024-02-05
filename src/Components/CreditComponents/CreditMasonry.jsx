import * as React from "react";
import CreditPromotionSlick1 from "../slick/CreditPromotionSlick1";
import CreditPromotionSlick2 from "../slick/CreditPromotionSlick2";
import CreditPromotionSlick3 from "../slick/CreditPromotionSlick3";

function CreditMasonry() {
  return (
    <>
      <div className="w-full px-2">
        <div className="w-full h-auto lg:flex">
          <div className="w-full lg:w-2/3 border bg-gray-300 border-blue-500 rounded-lg mt-1">
            <div className="w-full mb-10">
              <CreditPromotionSlick1 />
            </div>
          </div>
          <div className="w-full lg:w-1/3 bg-gray-100 border border-blue-500 rounded-lg mt-1 lg:ml-1">
            <div className="w-full mb-10 h-auto">
              <CreditPromotionSlick2 />
            </div>
          </div>
        </div>
        <div className="w-full h-auto border border-blue-500 rounded-lg mt-1 px-2">
          <CreditPromotionSlick3 />
        </div>
      </div>
    </>
  );
}

export default CreditMasonry;

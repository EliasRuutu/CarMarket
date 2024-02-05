import * as React from "react";
import RentalPromotionSlick1 from "../slick/RentalPromotionSlick1";
import RentalPromotionSlick2 from "../slick/RentalPromotionSlick2";
import RentalPromotionSlick3 from "../slick/RentalPromotionSlick3";

function RentalMasonry() {
  return (
    <>
      <div className="w-full px-2">
        <div className="w-full h-auto lg:flex">
          <div className="w-full lg:w-2/3 border bg-gray-300 border-blue-500 rounded-lg mt-1">
            <div className="w-full mb-10">
              <RentalPromotionSlick1 />
            </div>
          </div>
          <div className="w-full lg:w-1/3 bg-gray-100 border border-blue-500 rounded-lg mt-1 lg:ml-1">
            <div className="w-full mb-10 h-auto">
              <RentalPromotionSlick2 />
            </div>
          </div>
        </div>
        <div className="w-full h-auto border border-blue-500 rounded-lg mt-1 px-2">
          <RentalPromotionSlick3 />
        </div>
      </div>
    </>
  );
}

export default RentalMasonry;

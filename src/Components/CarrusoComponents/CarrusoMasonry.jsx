import * as React from "react";
import CarrusoPromotionSlick1 from "../slick/CarrusoPromotionSlick1";
import CarrusoPromotionSlick2 from "../slick/CarrusoPromotionSlick2";
import CarrusoPromotionSlick3 from "../slick/CarrusoPromotionSlick3";

function CarrusoMasonry() {
  return (
    <>
      <div className="w-full px-2">
        <div className="w-full h-auto lg:flex">
          <div className="w-full lg:w-2/3 border bg-gray-300 border-blue-500 rounded-lg mt-1">
            <div className="w-full mb-10">
              <CarrusoPromotionSlick1 />
            </div>
          </div>
          <div className="w-full lg:w-1/3 bg-gray-100 border border-blue-500 rounded-lg mt-1 lg:ml-1">
            <div className="w-full mb-10 h-auto">
              <CarrusoPromotionSlick2 />
            </div>
          </div>
        </div>
        <div className="w-full h-auto border border-blue-500 rounded-lg mt-1 px-2">
          <CarrusoPromotionSlick3 />
        </div>
      </div>
    </>
  );
}

export default CarrusoMasonry;

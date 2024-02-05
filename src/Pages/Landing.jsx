import * as React from "react";
import { CarouselCustomNavigation } from "../Components/CarouselCustomNavigation";
import MasonrySection from "./Masonry";

function LandingPage(){
    return(
        <>
            <CarouselCustomNavigation />
            <MasonrySection />
        </>
    );
}

export default LandingPage;
import RentalFeaturesButtons from "../Components/RentalComponents/RentalFeaturesButtons";
import RentalCarousel from "../Components/RentalComponents/RentalCarousel";
import RentalMasonry from "../Components/RentalComponents/RentalMasonry";

function Rental(){
    return (
      <>
        <RentalCarousel />
        <RentalFeaturesButtons />
        <RentalMasonry />
      </>
    );
}

export default Rental;
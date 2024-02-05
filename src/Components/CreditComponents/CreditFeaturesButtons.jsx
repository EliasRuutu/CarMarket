import { ButtonGroup, Button } from "@material-tailwind/react";
import HorizontalCard from "./CreditFeatures";

function CreditFeaturesButtons() {
  return (
    <div className="p-2">
      <div className="lg:flex w-full justify-between lg:justify-evenly float-left mb-4 mt-2">
        <Button
          size="lg"
          variant="gradient"
          color="light-blue"
          className="group relative flex w-full justify-center lg:w-auto items-center gap-3 overflow-hidden"
        >
          Solicitud crédito en linea
        </Button>
        <Button
          size="lg"
          variant="gradient"
          color="light-blue"
          className="group relative flex w-full mt-2 justify-center lg:w-auto items-center gap-10 text-center lg:px-24 overflow-hidden"
        >
          Cotizador
        </Button>
      </div>
      <div>
        <HorizontalCard />
      </div>
    </div>
  );
}

export default CreditFeaturesButtons;

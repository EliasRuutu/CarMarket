import { ButtonGroup, Button } from "@material-tailwind/react";
import AutoHitchCard from "./AutoHitchFeatures";

function AutoHitchFeaturesButtons() {
  return (
    <div className="p-2">
      <div className="lg:flex w-full justify-between lg:justify-evenly float-left mb-4 mt-2">
        <Button
          size="lg"
          variant="gradient"
          color="light-blue"
          className="group relative flex w-full justify-center lg:w-auto items-center gap-3 overflow-hidden"
        >
          Solicitud en linea
        </Button>
      </div>
      <div>
        <AutoHitchCard />
      </div>
    </div>
  );
}

export default AutoHitchFeaturesButtons;

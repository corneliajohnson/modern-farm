import { createPlan } from "./plan.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlantsObjs } from "./harvester.js";
import { foodVisualCatalog } from "./visualCatalog.js";

const yearlyPlan = createPlan();
plantSeeds(yearlyPlan);
const plantsArr = usePlants();
const harvestFoodArr = harvestPlantsObjs(plantsArr);

export const showVisualPlants = () => {
  return foodVisualCatalog(harvestFoodArr);
};

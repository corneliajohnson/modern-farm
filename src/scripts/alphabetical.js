import { createPlan } from "./plan.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { foodCatalog } from "./catalog.js";

const yearlyPlan = createPlan();
plantSeeds(yearlyPlan);
const plantsArr = usePlants();
const harvestFoodArr = harvestPlants(plantsArr);

export const sortPlants = () => {
  const alphabeticPlantArr = harvestFoodArr.sort();
  return foodCatalog(alphabeticPlantArr);
};

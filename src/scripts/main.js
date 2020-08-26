import { createPlan } from './plan.js';
import { usePlants } from './field.js'
import { plantSeeds } from './tractor.js';
import { harvestPlants } from './harvester.js'

const yearlyPlan = createPlan();
plantSeeds(yearlyPlan)
const plantsArr = usePlants()
const harvestFoodArr = harvestPlants(plantsArr)

import { foodCatalog } from './catalog.js'
foodCatalog(harvestFoodArr)
// console.log(harvestPlants(plantsArr))
import { createPlan } from './plan.js';
import { addPlants } from './field.js'
import { plantSeeds } from './tractor.js';
import { harvestPlants } from './harvester.js'

const yearlyPlan = createPlan();
plantSeeds(yearlyPlan)
const plantsArr = addPlants()
const harvestFoodArr = harvestPlants(plantsArr)

import { foodCatalog } from './catalog.js'
foodCatalog(harvestFoodArr)
console.log(harvestPlants(plantsArr))